const { sendMail } = require('../controllers/emailController');

const deactivateUser = (user) => {
  user.active = false;
  user.save();
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
