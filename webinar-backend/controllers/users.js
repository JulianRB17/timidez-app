const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

let JWT_SECRET;

if (process.env.NODE_ENV !== 'production') {
  JWT_SECRET = process.env.JWT_SECRET;
}

const error400 = function (err) {
  err.message = 'Se pasaron datos inválidos';
  err.status = 400;
};

const error401 = function (err, message = 'No autorizado') {
  err.message = message;
  err.status = 401;
};

const error404 = function (err) {
  err.status = 404;
  err.message = 'No se ha encontrado ningún usuario con ese ID';
};

const activateUser = async function (res) {
  await User.findOneAndUpdate({ email: email }, (active = true));
  res.send('Usuario registrado correctamente');
};

const createAdminUser = async function (password, res) {
  const hash = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    username,
    email,
    password: hash,
  });
  const token = jwt.sign({ _id: newUser._id }, JWT_SECRET, {
    expiresIn: '7d',
  });
  res.send({ token });
};

const registerUser = async function (username, email, res) {
  await User.create({
    username,
    email,
  });
  res.send('Usuario registrado correctamente');
};

const getUsers = async function (req, res, next) {
  try {
    const users = await User.find({});
    res.send({ users });
  } catch (err) {
    next(err);
  }
};

const getCurrentUser = async function (req, res, next) {
  try {
    const userId = req.user._id;
    const currentUser = await User.findById(userId);
    res.send({ currentUser });
  } catch (err) {
    next(err);
  }
};

const createUser = async function (req, res, next) {
  try {
    const { username, password, email } = req.body;
    const currentUser = await User.find({ email: email });

    if (currentUser) activateUser(res);

    if (password) createAdminUser(password, res);
    else registerUser(username, email, res);

    // Crear función de crear usuario y mandar mail que se repetirá en los tres casos
  } catch (err) {
    if (err.code === 401) {
      error401(err, 'Ya existe un usuario con este email');
    }
    if (err.name === 'ValidationError') {
      error400(err);
    }
    next(err);
  }
};

const login = async function (req, res, next) {
  const { email, password } = req.body;
  const errMessage = 'Email o contraseña incorrectos';
  try {
    const user = await User.findOne({ email }).select('+password');
    if (!user) throw new Error('Email o contraseña incorrectos');
    const matched = await bcrypt.compare(password, user.password);
    if (!matched) throw new Error('Email o contraseña incorrectos');
    const token = jwt.sign({ _id: user._id }, JWT_SECRET, {
      expiresIn: '7d',
    });
    res.send({ token });
  } catch (err) {
    if (err.message === errMessage) {
      error401(err);
    }
    next(err);
  }
};

const deleteUser = async function (req, res, next) {
  try {
    const deletedUser = await User.findOneAndDelete({ _id: req.params.id });
    res.send({ deletedUser });
  } catch (err) {
    if (err.name === 'CastError') {
      error404(err);
    }
    if (err.message === 'Proyect not found') {
      error404(err);
    }
    if (err.message === 'Invalid user') {
      error401(err);
    }
    next(err);
  }
};

module.exports = {
  getCurrentUser,
  getUsers,
  createUser,
  deleteUser,
  login,
};
