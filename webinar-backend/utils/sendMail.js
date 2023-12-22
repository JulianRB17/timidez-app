const nodemailer = require('nodemailer');
const { convert } = require('html-to-text');

const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
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

const sendEmail = catchAsync(async function (
  userEmail,
  subject,
  htmlBody,
  next
) {
  const mail = await transporter.sendMail({
    from: `"El julis" <eljulis@timidez.com>`,
    to: userEmail,
    bcc: EMAIL_USERNAME,
    subject: subject,
    html: htmlBody,
    text: convert(htmlBody),
  });

  if (!mail)
    return next(
      new AppError('Mail no enviado. Intenta después otra vez.', 500)
    );
});

module.exports = { sendEmail };
