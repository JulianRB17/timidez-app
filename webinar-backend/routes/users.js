const usersRoute = require('express').Router();
const {
  getCurrentUser,
  getUsers,
  createUser,
  deleteUser,
} = require('../controllers/usersController');

usersRoute.get('/', getUsers);
usersRoute.get('/current', getCurrentUser);
// usersRoute.put('/:id', activateUser)
usersRoute.delete('/:id', deleteUser);

module.exports = { usersRoute };
