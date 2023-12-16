const jwt = require('jsonwebtoken');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('../utils/appError');
const User = require('../models/user');

const { JWT_SECRET } = process.env;

module.exports.auth = catchAsync(async (req, res, next) => {
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

module.exports.createSendToken = (user, res) => {
  const token = jwt.sign({ _id: user._id }, JWT_SECRET, {
    expiresIn: '7d',
  });
  const cookieOptions = {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

  res.cookie('jwt', token, cookieOptions);

  res.json({ token });
};
