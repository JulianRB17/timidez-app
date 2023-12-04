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
    const {username, password, email} = req.body
    const currentUser = await User.findById(req.user._id);

    if (currentUser) {
      await User.findByIdAndUpdate(req.user._id, active = true)
      res.send('Usuario registrado correctamente');
    }
    
    let hash;
    if (password) {
      hash = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        username,
        email,
        password: hash,
      });
      const token = jwt.sign({ _id: newUser._id }, JWT_SECRET, {
        expiresIn: '7d',
      });
      res.send({ token });
    } else {
      await User.create({
        username,
        email,
        password: false,
      });
      res.send('Usuario registrado correctamente');

    // Crear función de crear usuario y mandar mail que se repetirá en los tres casos
    }
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
    if (!user) throw new Error('Invalid email or password');
    const matched = await bcrypt.compare(password, user.password);
    if (!matched) throw new Error('Invalid email or password');
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
    // const admin = await User.findById
    // Que sólo sea un admin que pueda borrar
    const user = await User.findById(req.params.id);
    if (!user) throw new Error('User not found');
    if (!user._id.equals(req.user._id)) throw new Error('Usuario no válido');
    else {
      const deletedUser = await User.findOneAndDelete({ _id: req.params.id });
      res.send({ deletedUser });
    }
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
  getUserById,
  getCurrentUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  login,
  userUpdateColaborateIn,
  userUpdateCreateProyect,
};
