const User = require('../models/user');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const phantomReengage = catchAsync(async function (req, res, next) {
  //   const user = await User.findById(req.params.id);
  //   if (!user)
  //     return next(new AppError('No se encontró usuario con ese id', 404));
  //   user.active = true;
  //   if (!user.engaged) user.engaged = true;
  //   user.save();

  next();
});
module.exports = { phantomReengage };
