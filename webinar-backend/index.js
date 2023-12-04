const express = require('express');
const mongoose = require('mongoose');
const validator = require('validator');
const { celebrate, Joi, Segments, errors } = require('celebrate');

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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('El servidor va a apagarse');
  }, 0);
});

app.use(errors());
app.use((err, req, res, next) => {
  const { status = 500, message } = err;
  res.status(status).send({
    message:
      status === 500 ? 'Se ha producido un error en el servidor' : message,
  });
});

app.listen(PORT, () => {
  console.log(PORT);
});
