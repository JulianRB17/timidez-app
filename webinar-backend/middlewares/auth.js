const jwt = require('jsonwebtoken');
const catchAsync = require('./../utils/catchAsync');

let JWT_SECRET;

if (process.env.NODE_ENV !== 'production') {
  JWT_SECRET = process.env.JWT_SECRET;
} else {
  JWT_SECRET = 'secreto';
}

module.exports = catchAsync(async (req, res, next) => {
  const { authorization } = req.headers;
  const error = function () {
    res.status(403).send({ message: 'Se requiere autorización' });
  };

  if (!authorization || !authorization.startsWith('Bearer')) return error();

  const token = authorization.replace('Bearer ', '');

  let payload;

  // ¿Este no es un await?
  payload = jwt.verify(token, JWT_SECRET);

  req.user = payload;
  next();
});
