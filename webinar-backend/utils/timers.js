const AppError = require('./appError');

const catchAsync = require('./catchAsync');
const { sendEmail } = require('./sendMail');

const deactivateUser = catchAsync(async (user, next) => {
  const userEmail = user.email;
  const subject = `Hola, ${user.username}, tu cuenta ha sido desactivada`;
  const htmlBody = '<p>Usuario desactivado, una lástima</p>';

  user.active = false;
  await user.save();
  await sendEmail(userEmail, subject, htmlBody, next);
});

const disengageNewUser = catchAsync(async (user, next) => {
  const userEmail = user.email;
  const subject = `Hola, ${user.username}, te extrañamos NUEVA`;
  const htmlBody = '<p>Usuario desactivado, una lástima</p>';

  user.new = false;
  user.engaged = false;
  await user.save();
  await sendEmail(userEmail, subject, htmlBody, next);
  deactivateTimerUser(user, next);
});

const disengageUser = catchAsync(async (user, next) => {
  const userEmail = user.email;
  const subject = `Hola, ${user.username}, te extrañamos`;
  const htmlBody = '<p>Usuario desactivado, una lástima</p>';

  user.reengaged = false;
  await user.save();
  await sendEmail(userEmail, subject, htmlBody, next);
  deactivateTimerUser(user, next);
});

const deactivateTimerUser = (user, next) => {
  setTimeout(() => deactivateUser(user, next), 3000, user, next);
};

const disengageNewUserTimer = (user, next) => {
  if (user) {
    setTimeout(
      () => disengageNewUser(user, next),
      1000 * 60,
      user,
      next,
      deactivateTimerUser
    );
  } else {
    next(new AppError('Usuario no encontrado', 404));
  }
};

const disengageUserTimer = (user, next) => {
  if (user) {
    setTimeout(
      () => disengageUser(user, next),
      1000 * 60,
      user,
      next,
      deactivateTimerUser
    );
  } else {
    next(new AppError('Usuario no encontrado', 404));
  }
};

module.exports = {
  disengageNewUserTimer,
  disengageUserTimer,
  deactivateTimerUser,
};
