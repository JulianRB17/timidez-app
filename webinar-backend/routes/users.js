const usersRoute = require('express').Router();
const {
  getCurrentUser,
  getUsers,
  createUser,
  deleteUser,
  login,
} = require('../controllers/users');
