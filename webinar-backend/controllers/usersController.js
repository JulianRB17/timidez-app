const User = require('../models/user');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const catchAsync = require('./../utils/catchAsync');
const AppError = require('../utils/appError');
const { createSendToken } = require('../middlewares/auth');

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
  const user = await User.findOne({ email });
  if (user) {
    user.engaged = true;
    user.new = true;
    user.reengaged = false;
    user.active = true;
    user.save();
    res.json({ user });
  }
  if (!user) {
    const newUser = await User.create({
      username,
      email,
    });
    res.json({ user: newUser });
  }
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
  createSendToken(user, res);
});

const deleteUser = catchAsync(async function (req, res, next) {
  const deletedUser = await User.findOneAndDelete({ _id: req.params.id });
  res.json({ user: deletedUser });
});

const createAdminUser = catchAsync(async function (req, res, next) {
  const { username, email, password } = req.body;
  const hash = await bcrypt.hash(password, 12);
  const user = await User.create({
    username,
    email,
    password: hash,
    admin: true,
    active: true,
    engaged: true,
    reengaged: true,
    client: true,
  });
  if (!user) return next(new AppError(error500, 500));
  createSendToken(user, res);
});

const getActiveUsers = catchAsync(async function (req, res, next) {
  const users = await User.find({ active: true });
  res.status(200).json({ users, length: users.length });
});

const getEngagedUsers = catchAsync(async function (req, res, next) {
  const users = await User.find({ engaged: true });
  res.status(200).json({ users, length: users.length });
});

const getClientUsers = catchAsync(async function (req, res, next) {
  const users = await User.find({ client: true });
  res.status(200).json({ users, length: users.length });
});

const getAdminUsers = catchAsync(async function (req, res, next) {
  const users = await User.find({ admin: true });
  res.status(200).json({ users, length: users.length });
});

module.exports = {
  getCurrentUser,
  getUser,
  getUsers,
  createUser,
  deleteUser,
  login,
  createAdminUser,
  reengageUser,
  transformClient,
  getActiveUsers,
  getEngagedUsers,
  getClientUsers,
  getAdminUsers,
};
