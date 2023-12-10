const apiRoute = require('express').Router();
const {
  celebrateCreateUserMiddleware,
  celebrateLoginMiddleware,
} = require('../middlewares/celebrate');

const {
  getUser,
  createUser,
  login,
} = require('../controllers/usersController');

apiRoute.get('/user', getUser);
apiRoute.post('/users', celebrateCreateUserMiddleware(), createUser);
apiRoute.post('/login', celebrateLoginMiddleware(), login);

module.exports = { apiRoute };
