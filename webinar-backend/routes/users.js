const usersRoute = require('express').Router();
const {
  getCurrentUser,
  getUsers,
  deleteUser,
  createAdminUser,
  transformClient,
  getActiveUsers,
  getEngagedUsers,
  getClientUsers,
  getAdminUsers,
  reengageUser,
  getNumbers,
} = require('../controllers/usersController');

usersRoute.get('/all', getUsers);
usersRoute.get('/numbers', getNumbers);
usersRoute.get('/active', getActiveUsers);
usersRoute.get('/engaged', getEngagedUsers);
usersRoute.get('/client', getClientUsers);
usersRoute.get('/admin', getAdminUsers);
usersRoute.get('/current', getCurrentUser);
usersRoute.post('/admin', createAdminUser);
usersRoute.patch('/client/:id', transformClient);
usersRoute.patch('/reengage/:id', reengageUser);
usersRoute.delete('/:id', deleteUser);

module.exports = { usersRoute };
