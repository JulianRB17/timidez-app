const usersRoute = require('express').Router();
const {
  getCurrentUser,
  getUsers,
  deleteUser,
  createAdminUser,
  transformClient,
} = require('../controllers/usersController');

usersRoute.get('/all', getUsers);
usersRoute.post('/admin', createAdminUser);
// usersRoute.patch('/activate/:id', activateUser);
// usersRoute.patch('/deactivate/:id', deactivateUser);
// usersRoute.patch('/engage/:id', engageUser);
// usersRoute.patch('/disengage/:id', disengageUser);
usersRoute.patch('/client/:id', transformClient);
usersRoute.delete('/:id', deleteUser);

usersRoute.get('/current', getCurrentUser);

module.exports = { usersRoute };
