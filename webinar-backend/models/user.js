const mongoose = require('mongoose');
const validator = require('validator');
const {
  disengageNewUserTimer,
  disengageUserTimer,
  registerUserTimer,
} = require('../utils/timers');
const catchAsync = require('../utils/catchAsync');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minlength: 3,
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
  reengaged: {
    type: Boolean,
    default: false,
  },
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
    if (this.new) {
      disengageNewUserTimer(this, next);
      registerUserTimer(this, next);
    }
    if (this.reengaged) disengageUserTimer(this, next);
  }
  next();
});

module.exports = mongoose.model('User', userSchema);

// Revisar el funcionamiento del save,
// cómo funcionan las tags de new, engaged y reengaged bien
// antes de codear
