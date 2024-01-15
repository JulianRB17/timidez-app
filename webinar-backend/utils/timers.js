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

const post2hEmail = (user) => {
  const subject = '¿Y si pudiera ser todo diferente?';
  const htmlBody = post2hHtmlEmail(user);

  sendEmail(user.email, subject, htmlBody);
};

const post1dEmail = (user) => {
  const subject =
    'Si te perdiste la clase gratuita o quisieras volverla a ver:';
  const htmlBody = post1dHtmlEmail(user);

  sendEmail(user.email, subject, htmlBody);
};

const post2dEmail = (user) => {
  const subject = 'Aquí nada más vengo a hacerte un pequeño recordatorio.';
  const htmlBody = post2dHtmlEmail(user);

  sendEmail(user.email, subject, htmlBody);
};

const post3dEmail = (user) => {
  const subject =
    'Te comparto las preguntas frecuentes que la gente tiene sobre Reconciliandome con mi timidez: herramientas actorales para la vida diaria.';
  const htmlBody = post3dHtmlEmail(user);

  sendEmail(user.email, subject, htmlBody);
};

const post4dEmail = (user) => {
  const subject = '¡Faltan 24 horas!';
  const htmlBody = post4dHtmlEmail(user);

  sendEmail(user.email, subject, htmlBody);
};

const post5d12hEmail = (user) => {
  const subject = '12 horas… sólo 12 horas y nos vamos...';
  const htmlBody = post5d12hHtmlEmail(user);

  sendEmail(user.email, subject, htmlBody);
};

const post5d6hEmail = (user) => {
  const subject = '6 horas y el reloj sigue corriendoooo… 🕒';
  const htmlBody = post5d6hHtmlEmail(user);

  sendEmail(user.email, subject, htmlBody);
};

const post5d3hEmail = (user) => {
  const subject = 'Tick tack, 3 horas dice el reloj, tick... tack';
  const htmlBody = post5d3hHtmlEmail(user);

  sendEmail(user.email, subject, htmlBody);
};

const post5d30mEmail = (user) => {
  const subject = 'Estamos en las últimas 🕒...';
  const htmlBody = post5d30mHtmlEmail(user);

  sendEmail(user.email, subject, htmlBody);
};

const post9dEmail = (user) => {
  const subject = '¡Muchas gracias por todo!';
  const htmlBody = post9dHtmlEmail(user);

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
  const timeoutTimePre = reminderDay - now;
  const postDay = webinarDate + hours * 60 * 60 * 1000;
  const timeoutTimePost = postDay - now;
  const timeoutPostIntervalFilter = now - webinarDate;

  if (pre && timeoutTimePre > 0) {
    return setTimeout(fn, timeoutTimePre, user);
  }
  if (!pre && timeoutPostIntervalFilter < 0) {
    console.log(timeoutPostIntervalFilter);
    return setTimeout(fn, timeoutTimePost, user);
  }
};

const reminder48Timer = (user) => {
  setToHappen(reminder48Email, 48, user, true);
};

const reminder24Timer = (user) => {
  setToHappen(reminder24Email, 24, user, true);
};

const reminder2Timer = (user) => {
  setToHappen(reminder2Email, 2, user, true);
};

const post2hTimer = (user) => {
  setToHappen(post2hEmail, 2, user, false);
};

const post1dTimer = (user) => {
  setToHappen(post1dEmail, 24, user, false);
};

const post2dTimer = (user) => {
  setToHappen(post2dEmail, 48, user, false);
};

const post3dTimer = (user) => {
  setToHappen(post3dEmail, 3 * 24, user, false);
};

const post4dTimer = (user) => {
  setToHappen(post4dEmail, 4 * 24, user, false);
};

const post5d12hTimer = (user) => {
  setToHappen(post5d12hEmail, 5 * 24 - 12, user, false);
};

const post5d6hTimer = (user) => {
  setToHappen(post5d6hEmail, 5 * 24 - 6, user, false);
};

const post5d3hTimer = (user) => {
  setToHappen(post5d3hEmail, 5 * 24 - 3, user, false);
};

const post5d30mTimer = (user) => {
  setToHappen(post5d30mEmail, 5 * 24 - 0.5, user, false);
};

const post9dTimer = (user) => {
  setToHappen(post9dEmail, 9 * 24, user, false);
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
  post2hTimer(user);
  post1dTimer(user);
  post2dTimer(user);
  post3dTimer(user);
  post4dTimer(user);
  post5d12hTimer(user);
  post5d6hTimer(user);
  post5d3hTimer(user);
  post5d30mTimer(user);
  post9dTimer(user);
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
