const AppError = require('./appError');

const catchAsync = require('./catchAsync');
const {
  registrationHtmlEmail,
  reminder48HtmlEmail,
  reminder24HtmlEmail,
  reminder2HtmlEmail,
  post2hHtmlEmail,
  post1dHtmlEmail,
  post2dHtmlEmail,
  post3dHtmlEmail,
  post4dHtmlEmail,
  post5d12hHtmlEmail,
  post5d6hHtmlEmail,
  post5d3hHtmlEmail,
  post5d30mHtmlEmail,
  post9dHtmlEmail,
} = require('./mails');
const { sendEmail } = require('./sendMail');

const date = process.env.WEBINAR_DATE;

const deactivateUser = catchAsync(async (user) => {
  const userEmail = user.email;
  const subject = `Hola, ${user.username}, tu cuenta ha sido desactivada`;
  const htmlBody = '<p>Usuario desactivado, una lástima</p>';

  user.active = false;
  await user.save();
  sendEmail(userEmail, subject, htmlBody);
});

// const disengageNewUser = catchAsync(async (user) => {
//   const subject = `Hola, ${user.username}, te extrañamos`;
//   const htmlBody = '<p>Usuario desactivado, una lástima</p>';

//   user.new = false;
//   user.engaged = false;
//   await user.save();
//   sendEmail(user.email, subject, htmlBody);
//   deactivateTimerUser(user);
// });

const disengageUser = catchAsync(async (user) => {
  const subject = `Hola, ${user.username}, te extrañamos`;
  const htmlBody = '<p>Usuario desanclado, una lástima</p>';

  user.engaged = false;
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

// const setToHappen = (fn, hours, user, pre) => {
//   const now = new Date().getTime();
//   const webinarDate = new Date(date).getTime();
//   const reminderDay = webinarDate - hours * 60 * 60 * 1000;
//   const timeoutTime = reminderDay - now;

//   if (timeoutTime > 0) {
//     return setTimeout(fn, timeoutTime, user);
//   }
// };

const setToHappen = (fn, hours, user, pre) => {
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

const verifyNowAndRegistrationDate = (user, fn) => {
  const now = new Date().getTime();
  const userCreationAndNowHourSubstraction =
    (now - user.date.getTime()) / (1000 * 60);
  if (userCreationAndNowHourSubstraction < 10) {
    fn(user);
  }
};

const registerUserTimer = (user) => {
  verifyNowAndRegistrationDate(user, registerUserEmail);
  reminder48Timer(user);
  reminder24Timer(user);
  reminder2Timer(user);
};

// const disengageNewUserTimer = (user, next) => {
//   if (user) {
//     setTimeout(
//       () => disengageNewUser(user),
//       1000 * 60 * 60 * 24 * 23,
//       user,
//       deactivateTimerUser
//     );
//   } else {
//     next(new AppError('Usuario no encontrado', 404));
//   }
// };

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
  // disengageNewUserTimer,
  disengageUserTimer,
  deactivateTimerUser,
  registerUserTimer,
};
