const nodemailer = require('nodemailer');

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_PASSWORD,
  },
});

export const sendMail = mailOptions => {
  mailTransport
    .sendMail(mailOptions)
    .then(() => console.log(`messaged someone}`))
    .catch(error =>
      console.error('There was an error while sending the email:', error),
    );
};
