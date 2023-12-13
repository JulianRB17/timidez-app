const jwt = require('jsonwebtoken');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('../utils/appError');
const User = require('../models/user');

const { JWT_SECRET } = process.env;

module.exports = catchAsync(async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer'))
    return next(new AppError('Se requiere autorización', 401));

  const token = authorization.replace('Bearer ', '');

  const payload = jwt.verify(token, JWT_SECRET);

  const user = await User.findById(payload._id);
  if (!user)
    return next(
      new AppError('Ese usuario ya no existe, vuelve a ingresar por favor', 401)
    );
  if (!user.admin) return next(new AppError('No autorizado', 403));
  req.user = payload;
  next();
});
