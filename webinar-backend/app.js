const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
// revisar último video de seguridad si decido usar parámetros

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const { usersRoute } = require('./routes/users');
const { apiRoute } = require('./routes/api');
const { auth } = require('./middlewares/auth');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const limiter = require('./middlewares/rateLimit');
const { emailRoute } = require('./routes/email');
const { resetActiveUser, sendResetMail } = require('./middlewares/resetApp');
require('dotenv').config();

process.on('uncaughtException', (err) => {
  // MANDARME MAIL AQUÍ AUTOMATIZAR EL RESETEO DEL SERVER
  console.log('UNCAUGHT EXCPETION... app cerrándose');
  console.log(err.name, err.message);
  process.exit(1);
});

const { PORT = 3001, NODE_ENV } = process.env;
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/timidez');
app.use(helmet());

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);

app.use(mongoSanitize());

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('El servidor va a apagarse');
  }, 0);
});

app.use(limiter);
app.use('/api', xss(), apiRoute);
app.use(auth);
app.use('/api/users', usersRoute);
app.use('/api/email', emailRoute);

app.use(errorLogger);
// app.use(errors());

app.all('*', (req, res, next) => {
  next(new AppError(`No se encuentra ${req.originalUrl} en el servidor`, 404));
});

app.use(globalErrorHandler);

const server = app.listen(PORT, () => {
  resetActiveUser();
  sendResetMail();
  console.log(NODE_ENV, PORT);
});

process.on('unhandledRejection', (err) => {
  // MANDARME MAIL AQUÍ AUTOMATIZAR EL RESETEO DEL SERVER
  console.log('UNHANDLED REJECTION... app cerrándose');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

// En la automatización de mails modificar dos cosas
// 1.- Se están mandando mails de 48 horas aunque falten menos de 48 horas, aquí es un si el timestamp es < 0 entonces no se manda
// 2.- Se están mandando mails de webinar al momento de reiniciar el servidor, quizás hacer una timestamp del webinar al que se registraron en el schemma y ya no mandar los mails que ya se mandaron de alguna forma
// Vinculación con frontend
// Darme de alta en sendgrid u otro servidor de mails pros
// Averiguar cómo funcionaría la inexistencia del tracking de emails durante el despliegue y si es necesaria la etiqueta de reengaged
// Elementos para despliegue
// Tracking de emails
