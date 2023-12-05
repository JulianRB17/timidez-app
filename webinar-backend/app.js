const express = require('express');
const mongoose = require('mongoose');
const validator = require('validator');
const { celebrate, Joi, Segments, errors } = require('celebrate');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const { usersRoute } = require('./routes/users');
const { login, createUser } = require('./controllers/usersController');
const auth = require('./middlewares/auth');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3001, API_KEY } = process.env;
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/timidez');

const emailValidator = function (value, helpers) {
  if (validator.isEmail(value)) {
    return value;
  }
  return helpers.error('string.uri');
};

const celebrateCreateUserMiddleware = function () {
  return celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().required().custom(emailValidator),
      username: Joi.string().required(),
    }),
  });
};

const celebrateLoginMiddleware = function () {
  return celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().required().custom(emailValidator),
      password: Joi.string().required(),
    }),
  });
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('El servidor va a apagarse');
  }, 0);
});

app.post('/api/users', celebrateCreateUserMiddleware(), createUser);
app.post('/api/ingresar', celebrateLoginMiddleware(), login);

// app.use(auth);
app.use('/api/users', usersRoute);

app.use(errorLogger);
app.use(errors());

app.all('*', (req, res, next) => {
  next(new AppError(`No se encuentra ${req.originalUrl} en el servidor`, 404));
});

app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(PORT);
});
