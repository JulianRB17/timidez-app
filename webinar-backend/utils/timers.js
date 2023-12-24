const AppError = require('./appError');

const catchAsync = require('./catchAsync');
const {
  registrationHtmlEmail,
  reminder48HtmlEmail,
  reminder24HtmlEmail,
  reminder2HtmlEmail,
} = require('./mails');
const { sendEmail } = require('./sendMail');

const date = process.env.WEBINAR_DATE;

const deactivateUser = catchAsync(async (user, next) => {
  const userEmail = user.email;
  const subject = `Hola, ${user.username}, tu cuenta ha sido desactivada`;
  const htmlBody = '<p>Usuario desactivado, una lástima</p>';

  user.active = false;
  await user.save();
  await sendEmail(userEmail, subject, htmlBody);
});

const disengageNewUser = catchAsync(async (user, next) => {
  const userEmail = user.email;
  const subject = `Hola, ${user.username}, te extrañamos NUEVA`;
  const htmlBody = '<p>Usuario desactivado, una lástima</p>';

  user.new = false;
  user.engaged = false;
  await user.save();
  sendEmail(userEmail, subject, htmlBody);
  deactivateTimerUser(user, next);
});

const disengageUser = catchAsync(async (user, next) => {
  const userEmail = user.email;
  const subject = `Hola, ${user.username}, te extrañamos`;
  const htmlBody = '<p>Usuario desactivado, una lástima</p>';

  user.reengaged = false;
  await user.save();
  sendEmail(userEmail, subject, htmlBody);
  deactivateTimerUser(user, next);
});

const registerUserEmail = (user, next) => {
  const { username, email } = user;
  const subject = 'Registro a clase gratuita';
  const htmlBody = registrationHtmlEmail(username, date);

  sendEmail(email, subject, htmlBody);
};

const reminder48Email = (user, next) => {
  const { username, email } = user;
  const subject = '¡Nos vemos en 48 horas!';
  const htmlBody = reminder48HtmlEmail(username, date);

  sendEmail(email, subject, htmlBody);
};

const reminder24Email = (user, next) => {
  const { username, email } = user;
  const subject = 'YA ES MAÑANA';
  const htmlBody = reminder24HtmlEmail(username, date);

  sendEmail(email, subject, htmlBody);
};

const reminder2Email = (user, next) => {
  const { username, email } = user;
  const subject = 'En 2 horas es la clase gratuita, vete preparando';
  const htmlBody = reminder2HtmlEmail(username, date);

  sendEmail(email, subject, htmlBody);
};

const setToHappen = (fn, hours, user, next) => {
  const now = new Date().getTime();
  const webinarDate = new Date(date).getTime();
  const reminderDay = webinarDate - hours * 60 * 60 * 1000;
  const timeoutTime = reminderDay - now;

  return setTimeout(fn, timeoutTime, user, next);
};

const reminder48Timer = (user, next) => {
  setToHappen(reminder48Email, 48, user, next);
};

const reminder24Timer = (user, next) => {
  setToHappen(reminder24Email, 24, user, next);
};

const reminder2Timer = (user, next) => {
  setToHappen(reminder2Email, 2, user, next);
};

const deactivateTimerUser = (user, next) => {
  setTimeout(
    () => deactivateUser(user, next),
    1000 * 60 * 60 * 24 * 30,
    user,
    next
  );
};

const registerUserTimer = (user, next) => {
  registerUserEmail(user, next);
  reminder48Timer(user, next);
  reminder24Timer(user, next);
  reminder2Timer(user, next);
};

const disengageNewUserTimer = (user, next) => {
  if (user) {
    setTimeout(
      () => disengageNewUser(user, next),
      1000 * 60 * 60 * 24 * 23,
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
      1000 * 60 * 60 * 24 * 23,
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
  registerUserTimer,
};
