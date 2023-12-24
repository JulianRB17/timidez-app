const User = require('../models/user');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const { sendEmail } = require('../utils/sendMail');
require('dotenv').config();

const sendManualEmail = catchAsync(async function (req, res, next) {
  const users = await User.find({ active: true }, { email: 1, username: 1 });
  const { subject, htmlBody } = req.body;
  if (!subject || !htmlBody)
    return next(new AppError('Necesita mandarse asunto y html', 401));

  users.forEach((user) => {
    const userEmail = user.email;
    if (!userEmail) return;
    sendEmail(userEmail, subject, htmlBody, next);
  });

  res.status(200).json({ users });
});

// class Email {
//   constructor(user, url) {
//     this.to = user.email;
//     this.userName = user.userName;
//     this.url = url;
//     this.from = `Julián Reyes Botello <${process.env.EMAIL_FROM}>`;
//   }

//   newTransport() {
//     if (process.env.NODE_ENV === 'development') {
//       return nodemailer.createTransport({
//         host: EMAIL_HOST,
//         port: EMAIL_PORT,
//         auth: {
//           user: EMAIL_USERNAME,
//           pass: EMAIL_PASSWORD,
//         },
//       });
//     }
//     if (process.env.NODE_ENV === 'production') {
//       return 1;
//     }
//   }

//   async send(template, subject) {
//     const mailOptions = {
//       from: this.from,
//       to: this.to,
//       subject,
//       html: template,
//       text: htmlToText.fromString(template),
//     };

//     await this.newTransport().sendMail(mailOptions);
//   }

//   async sendWebinarRegistration() {
//     await this.send('Cuerpo de regitro', 'Bienvenida/o al webinar TAL');
//   }

//   async sendWebinarReminder48() {
//     await this.send('En dos días es el webinaar', 'En dos días nos vemos');
//   }

//   async sendWebinarReminder24() {
//     await this.send(
//       'Mañana nos vemos así que vete preparando',
//       'Mañana es el día'
//     );
//   }

//   async sendWebinarReminder1hr() {
//     await this.send(
//       'En una hora nos vemons así que prepara una botella de agua',
//       '¡En una hora nos vemos!'
//     );
//   }
// }

module.exports = { sendEmail, sendManualEmail };
