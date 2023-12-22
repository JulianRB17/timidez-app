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
} = require('../controllers/usersController');

apiRoute.get('/user', getUser);
apiRoute.post('/users', celebrateCreateUserMiddleware(), createUser);
apiRoute.post('/login', celebrateLoginMiddleware(), login);
apiRoute.patch('/user/:id', reengageUser);

module.exports = { apiRoute };
