const nodemailer = require('nodemailer');

const catchAsync = require('./../utils/catchAsync');
const AppError = require('../utils/appError');
require('dotenv').config();

const { EMAIL_USERNAME, EMAIL_PASSWORD, EMAIL_HOST, EMAIL_PORT } = process.env;

const transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: EMAIL_PORT,
  auth: {
    user: EMAIL_USERNAME,
    pass: EMAIL_PASSWORD,
  },
});

const sendEmail = async function (userEmail, subject, htmlBody) {
  await transporter.sendMail({
    from: `El julis <eljulis@timidez.com>`,
    to: userEmail,
    bcc: EMAIL_USERNAME,
    subject: subject,
    html: htmlBody,
  });
};

// sendMail().catch(new AppError('Algo salió mal', 500));

module.exports = { sendEmail };
