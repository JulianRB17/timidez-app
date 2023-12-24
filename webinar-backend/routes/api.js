const apiRoute = require('express').Router();
const {
  celebrateCreateUserMiddleware,
  celebrateLoginMiddleware,
} = require('../middlewares/celebrate');

const {
  getUser,
  createUser,
  login,
  reengageUser,
  getDate,
} = require('../controllers/usersController');

apiRoute.get('/user', getUser);
apiRoute.get('/date', getDate);
apiRoute.post('/users', celebrateCreateUserMiddleware(), createUser);
apiRoute.post('/login', celebrateLoginMiddleware(), login);
apiRoute.patch('/user/:id', reengageUser);

module.exports = { apiRoute };
