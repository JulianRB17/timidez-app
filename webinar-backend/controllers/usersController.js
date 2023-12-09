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

const createAdminUser = catchAsync(async function (password, res, next) {
  const hash = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    username,
    email,
    password: hash,
  });
  if (!newUser) return next(new AppError(error500, 500));
  const token = jwt.sign({ _id: newUser._id }, JWT_SECRET, {
    expiresIn: '7d',
  });
  res.send({ token });
});

const activateUser = catchAsync(async function (req, res, next) {
  const updatedUser = await updateUser(
    { email: req.body.email },
    { active: true, disengaged: false }
  );
  res.send(updatedUser);
});

//handlers

const findUser = async function (req, res, next) {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return next(new AppError(error404, 404));
  return user;
};

const updateUser = async function (findObject, updateObject, next) {
  const updatedUser = await User.findOneAndUpdate(findObject, updateObject);
  if (!updatedUser) return next(new AppError(error500, 500));
  return updatedUser;
};

const deactivateUser = catchAsync(async function (req, res, next) {
  const user = await findUser(req, res, next);
  if (!user.client) {
    const updatedUser = await updateUser(
      { email: email },
      { active: false, disengaged: false }
    );
    res.send(updatedUser);
  } else res.send(user);
});

const disengageUser = catchAsync(async function (req, res, next) {
  await findUser(req, res, next);
  const updatedUser = await updateUser(
    { email: req.body.email },
    { disengaged: true }
  );

  res.send(updatedUser);
});

const transformClient = async function (req, res, next) {
  await findUser(req, res, next);
  const updatedUser = await User.findOneAndUpdate(
    { email: email },
    { client: true }
  );
  res.send(updatedUser);
};

const registerUser = catchAsync(async function (username, email, res) {
  const user = await User.create({
    username,
    email,
  });
  if (!user) return next(new AppError(error500, 500));
  res.send(user);
});

const getUsers = catchAsync(async function (req, res, next) {
  const users = await User.find({});
  res.send({ users });
});

const getCurrentUser = catchAsync(async function (req, res, next) {
  const userId = req.user._id;
  const currentUser = await User.findById(userId);
  if (!currentUser)
    return next(new AppError('No se encontró usuario con esa id', 404));
  res.send({ currentUser });
});

const createUser = catchAsync(async function (req, res, next) {
  const { username, password, email } = req.body;

  const currentUser = await User.findOne({ email: email });

  if (currentUser) activateUser(req, res, next);

  if (password) createAdminUser(password, res, next);
  else registerUser(username, email, res);

  // Crear función de crear usuario y mandar mail que se repetirá en los tres casos
});

const login = catchAsync(async function (req, res, next) {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select('+password');
  if (!user) return new AppError(error400, 400);
  const matched = await bcrypt.compare(password, user.password);
  if (!matched) return new AppError(error400, 400);
  const token = jwt.sign({ _id: user._id }, JWT_SECRET, {
    expiresIn: '7d',
  });
  res.send({ token });
});

const deleteUser = catchAsync(async function (req, res, next) {
  await findUser(req, res, next);
  const deletedUser = await User.findOneAndDelete({ _id: req.params.id });
  if (!deletedUser) return next(new AppError(error404, 404));
  res.send({ deletedUser });
});

module.exports = {
  getCurrentUser,
  getUsers,
  createUser,
  deleteUser,
  login,
};
