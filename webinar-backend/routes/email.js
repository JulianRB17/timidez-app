const emailRoute = require('express').Router();

const { sendManualEmail } = require('../controllers/emailController');

emailRoute.post('/', sendManualEmail);

module.exports = { emailRoute };
