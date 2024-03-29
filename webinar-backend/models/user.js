const mongoose = require('mongoose');
const validator = require('validator');
const { disengageUserTimer, registerUserTimer } = require('../utils/timers');
const catchAsync = require('../utils/catchAsync');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    maxlength: 30,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: (value) => `${value} no es un email válido`,
    },
    required: true,
  },
  password: {
    type: String,
    select: false,
  },
  new: {
    type: Boolean,
    default: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  client: {
    type: Boolean,
    default: false,
  },
  engaged: {
    type: Boolean,
    default: true,
  },
  // reengaged: {
  //   type: Boolean,
  //   default: false,
  // },
  date: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  admin: {
    type: Boolean,
    default: false,
  },
});

userSchema.pre('save', function (next) {
  if (!this.client || !this.admin) {
    // if (this.new) {
    //   disengageNewUserTimer(this, next);
    //   registerUserTimer(this, next);
    // }
    // if (this.reengaged) disengageUserTimer(this, next);
    if (this.new) {
      registerUserTimer(this, next);
    }
    disengageUserTimer(this, next);
  }
  next();
});

userSchema.methods.setNew = catchAsync(async function (user) {
  user.new = false;
  await user.save();
});

module.exports = mongoose.model('User', userSchema);
