const { sendEmail } = require('../controllers/emailController');
const AppError = require('./appError');

const deactivateUser = (user) => {
  const userEmail = user.email;
  const subject = `Hola, ${user.username}, tu cuenta ha sido desactivada`;
  const htmlBody = '<p>Usuario desactivado, una lástima</p>';

  user.active = false;
  user.save();
  sendEmail(userEmail, subject, htmlBody).catch(
    () => new AppError('Mail no enviado', 500)
  );
};

const deactivateTimerUser = (user) => {
  if (user) {
    setTimeout((user) => deactivateUser(user), 3000, user);
  }
};

const disengageNewUser = (user) => {
  user.new = false;
  user.engaged = false;
  user.save();
  deactivateTimerUser(user);
};

const disengageTimerNewUser = (user) => {
  if (user) {
    setTimeout((user) => disengageNewUser(user), 3000, user);
  }
};

const disengageUser = (user) => {
  user.reengaged = false;
  user.save();
  deactivateTimerUser(user);
};

const disengageTimerUser = (user) => {
  if (user) {
    setTimeout((user) => disengageUser(user), 3000, user);
  }
};

module.exports = { disengageTimerNewUser, disengageTimerUser };
