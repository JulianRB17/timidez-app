const nodemailer = require('nodemailer');
require('dotenv').config();

const catchAsync = require('./../utils/catchAsync');
const AppError = require('../utils/appError');

const transporter = nodemailer.createTransport({
  host: 'vemos',
  port: 465,
  secure: true,
  auth: {
    user: 'MIO',
    pass: 'contraseña',
  },
});

const sendMail = async function (userEmail, subject, htmlBody) {
  //     const info = await transporter.sendMail({
  //       from: '<mimail@gmail.com>',
  //       to: userEmail,
  //   bcc: '<mimail@gmail.com>',
  //       subject: subject,
  //       html: htmlBody,
  //     });

  console.log(userEmail, subject, htmlBody);
};

main().catch(new AppError('Algo salió mal', 500));

module.exports = { sendMail };
