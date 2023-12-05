const mongoose = require('mongoose');
const validator = require('validator');

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
  disengaged: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('user', userSchema);
