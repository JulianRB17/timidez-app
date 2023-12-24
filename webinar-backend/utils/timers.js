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

const deactivateUser = catchAsync(async (user) => {
  const userEmail = user.email;
  const subject = `Hola, ${user.username}, tu cuenta ha sido desactivada`;
  const htmlBody = '<p>Usuario desactivado, una lástima</p>';

  user.active = false;
  await user.save();
  await sendEmail(userEmail, subject, htmlBody);
});

const disengageNewUser = catchAsync(async (user) => {
  const userEmail = user.email;
  const subject = `Hola, ${user.username}, te extrañamos NUEVA`;
  const htmlBody = '<p>Usuario desactivado, una lástima</p>';

  user.new = false;
  user.engaged = false;
  await user.save();
  sendEmail(userEmail, subject, htmlBody);
  deactivateTimerUser(user);
});

const disengageUser = catchAsync(async (user) => {
  const subject = `Hola, ${user.username}, te extrañamos`;
  const htmlBody = '<p>Usuario desactivado, una lástima</p>';

  user.reengaged = false;
  await user.save();
  sendEmail(user.email, subject, htmlBody);
  deactivateTimerUser(user);
});

const registerUserEmail = (user) => {
  const subject = 'Registro a clase gratuita';
  const htmlBody = registrationHtmlEmail(user, date);

  sendEmail(user.email, subject, htmlBody);
};

const reminder48Email = (user) => {
  const subject = '¡Nos vemos en 48 horas!';
  const htmlBody = reminder48HtmlEmail(user, date);

  sendEmail(user.email, subject, htmlBody);
};

const reminder24Email = (user) => {
  const subject = 'YA ES MAÑANA';
  const htmlBody = reminder24HtmlEmail(user, date);

  sendEmail(user.email, subject, htmlBody);
};

const reminder2Email = (user) => {
  const subject = 'En 2 horas es la clase gratuita, vete preparando';
  const htmlBody = reminder2HtmlEmail(user, date);

  sendEmail(user.email, subject, htmlBody);
};

const setToHappen = (fn, hours, user) => {
  const now = new Date().getTime();
  const webinarDate = new Date(date).getTime();
  const reminderDay = webinarDate - hours * 60 * 60 * 1000;
  const timeoutTime = reminderDay - now;

  if (timeoutTime > 0) {
    return setTimeout(fn, timeoutTime, user);
  }
};

const reminder48Timer = (user) => {
  setToHappen(reminder48Email, 48, user);
};

const reminder24Timer = (user) => {
  setToHappen(reminder24Email, 24, user);
};

const reminder2Timer = (user) => {
  setToHappen(reminder2Email, 2, user);
};

const deactivateTimerUser = (user) => {
  setTimeout(() => deactivateUser(user), 1000 * 60 * 60 * 24 * 30, user);
};

const registerUserTimer = (user) => {
  registerUserEmail(user);
  reminder48Timer(user);
  reminder24Timer(user);
  reminder2Timer(user);
};

const disengageNewUserTimer = (user, next) => {
  if (user) {
    setTimeout(
      () => disengageNewUser(user),
      1000 * 60 * 60 * 24 * 23,
      user,
      deactivateTimerUser
    );
  } else {
    next(new AppError('Usuario no encontrado', 404));
  }
};

const disengageUserTimer = (user, next) => {
  if (user) {
    setTimeout(
      () => disengageUser(user),
      1000 * 60 * 60 * 24 * 23,
      user,
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
