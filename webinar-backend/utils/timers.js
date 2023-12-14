const { sendEmail } = require('../controllers/emailController');
const AppError = require('./appError');

const deactivateUser = async (user, next) => {
  const userEmail = user.email;
  const subject = `Hola, ${user.username}, tu cuenta ha sido desactivada`;
  const htmlBody = '<p>Usuario desactivado, una lástima</p>';

  user.active = false;
  await user.save();
  sendEmail(userEmail, subject, htmlBody, next);
};

const deactivateTimerUser = (user, next) => {
  if (user) {
    setTimeout(() => deactivateUser(user, next), 3000, user, next);
  }
};

const disengageNewUser = async (user, next) => {
  user.new = false;
  user.engaged = false;
  await user.save();
  deactivateTimerUser(user, next);
};

const disengageTimerNewUser = (user, next) => {
  if (user) {
    setTimeout(() => disengageNewUser(user, next), 3000, user, next);
  }
};

const disengageUser = async (user, next) => {
  user.reengaged = false;
  await user.save();
  deactivateTimerUser(user, next);
};

const disengageTimerUser = (user, next) => {
  if (user) {
    setTimeout(() => disengageUser(user, next), 3000, user, next);
  }
};

module.exports = { disengageTimerNewUser, disengageTimerUser };
