const User = require('../models/user');
const catchAsync = require('../utils/catchAsync');
const { sendEmail } = require('../utils/sendMail');

const resetActiveUser = catchAsync(async function () {
  const users = await User.find({ active: true });
  users.forEach((user) => {
    user.save();
  });
});

const sendResetMail = catchAsync(async function (res, req, next) {
  sendEmail(
    'ignis.lykaios@gmail.com',
    'Reinicio de servidor',
    '<h1>Se ha reiniciado el servidor</h1>'
  );
});

module.exports = { resetActiveUser, sendResetMail };
