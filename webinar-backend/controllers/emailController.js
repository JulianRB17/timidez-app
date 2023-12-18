const nodemailer = require('nodemailer');
const htmlToText = require('html-to-text');

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

const sendEmail = async function (userEmail, subject, htmlBody, next) {
  try {
    const mail = await transporter.sendMail({
      from: `"El julis" <eljulis@timidez.com>`,
      to: userEmail,
      bcc: EMAIL_USERNAME,
      subject: subject,
      html: htmlBody,
    });
    // if (mail.rejected.length >= 1) {
    //   return next(new AppError(`Mail no enviado`, 500));
    // }
  } catch (err) {
    return next(
      new AppError('Mail no enviado. Intenta después otra vez.', 500)
    );
  }
};

class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name.split(' ')[0];
    this.url = url;
    this.from = `Julián Reyes Botello <${process.env.EMAIL_FROM}>`;
  }

  newTransport() {
    if (process.env.NODE_ENV === 'development') {
      return nodemailer.createTransport({
        host: EMAIL_HOST,
        port: EMAIL_PORT,
        auth: {
          user: EMAIL_USERNAME,
          pass: EMAIL_PASSWORD,
        },
      });
    }
    if (process.env.NODE_ENV === 'production') {
      return 1;
    }
  }

  async send(template, subject) {
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html: template,
      text: htmlToText.fromString(template),
    };

    await this.newTransport().sendMail(mailOptions);
  }

  async sendWebinarRegistration() {
    await this.send('Cuerpo de regitro', 'Bienvenida/o al webinar TAL');
  }

  async sendWebinarReminder48() {
    await this.send('En dos días es el webinaar', 'En dos días nos vemos');
  }

  async sendWebinarReminder24() {
    await this.send(
      'Mañana nos vemos así que vete preparando',
      'Mañana es el día'
    );
  }

  async sendWebinarReminder1hr() {
    await this.send(
      'En una hora nos vemons así que prepara una botella de agua',
      '¡En una hora nos vemos!'
    );
  }
}

module.exports = { sendEmail };
