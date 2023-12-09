const usersRoute = require('express').Router();
const {
  getCurrentUser,
  getUsers,
  createUser,
  deleteUser,
  activateUser,
} = require('../controllers/usersController');

usersRoute.get('/', getUsers);
usersRoute.get('/current', getCurrentUser);
usersRoute.patch('/:id', activateUser);
usersRoute.delete('/:id', deleteUser);

module.exports = { usersRoute };
