const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const catchAsync = require('./../utils/catchAsync');
const AppError = require('../utils/appError');

let JWT_SECRET;

if (process.env.NODE_ENV !== 'production') {
  JWT_SECRET = process.env.JWT_SECRET;
}

const error500 = 'Algo salió mal en el servidor';
const error404 = 'No se encontró usuario con ese email';
const error401 = 'No autorizado';
const error400 = 'Se pasaron datos inválidos';

const updateUser = async function (findObject, updateObject, next) {
  const updatedUser = await User.findOneAndUpdate(findObject, updateObject, {
    new: true,
  });
  if (!updatedUser) return next(new AppError(error500, 500));
  return updatedUser;
};

//handlers

const getUser = async function (req, res, next) {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return next(new AppError(error404, 404));
  res.json({ user: user });
};

const getUsers = catchAsync(async function (req, res, next) {
  const users = await User.find({});
  res.json({ users: users });
});

const getCurrentUser = catchAsync(async function (req, res, next) {
  const currentUser = await User.findById(req.user._id);
  if (!currentUser)
    return next(new AppError('No se encontró usuario con esa id', 404));
  res.json({ user: currentUser });
});

const deactivateUser = catchAsync(async function (req, res, next) {
  const updatedUser = await updateUser(
    { _id: req.params.id },
    { active: false, disengaged: false }
  );
  res.json({ user: updatedUser });
});

const activateUser = catchAsync(async function (req, res, next) {
  const updatedUser = await updateUser(
    { _id: req.params.id },
    { active: true, engaged: false },
    next
  );
  res.json({ user: updatedUser });
});

const reengageUser = catchAsync(async function (req, res, next) {
  const user = await User.findOne({ _id: req.params.id });
  if (!user)
    return next(new AppError('No se encontró usuario con este ID', 404));
  user.reengaged = true;
  user.active = true;
  user.save();
  res.json({ user: user });
});

const transformClient = async function (req, res, next) {
  const updatedUser = await updateUser(
    { _id: req.params.id },
    { client: true }
  );
  res.json({ user: updatedUser });
};

const createUser = catchAsync(async function (req, res, next) {
  const { username, email } = req.body;
  const user = await User.create({
    username,
    email,
  });
  if (!user) return next(new AppError(error500, 500));
  res.json({ user: user });
});

const login = catchAsync(async function (req, res, next) {
  const { email, password } = req.body;
  if (!email || !password)
    return next(new AppError('Por favor envía un email y una contraseña', 400));
  const user = await User.findOne({ email }).select('+password');
  if (!user) return next(new AppError('Email o contraseña incorrectos', 401));
  const matched = await bcrypt.compare(password, user.password);
  if (!matched)
    return next(new AppError('Email o contraseña incorrectos', 401));
  const token = jwt.sign({ _id: user._id }, JWT_SECRET, {
    expiresIn: '7d',
  });
  res.json({ token });
});

const deleteUser = catchAsync(async function (req, res, next) {
  const deletedUser = await User.findOneAndDelete({ _id: req.params.id });
  res.json({ user: deletedUser });
});

const createAdminUser = catchAsync(async function (req, res, next) {
  const { username, email, password } = req.body;
  const hash = await bcrypt.hash(password, 12);
  const newUser = await User.create({
    username,
    email,
    password: hash,
    admin: true,
  });
  if (!newUser) return next(new AppError(error500, 500));
  const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
  res.json({ token });
});

module.exports = {
  getCurrentUser,
  getUser,
  getUsers,
  createUser,
  deleteUser,
  login,
  deactivateUser,
  activateUser,
  createAdminUser,
  reengageUser,
  transformClient,
};
