const axios = require('axios');
const nodemailer = require('nodemailer');

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_PASSWORD,
  },
});

const instance = axios.create({
  baseURL: 'https://us-central1-chiswick-rehearsal-room.cloudfunctions.net',
  headers: { key: 'secret333' },
});

export function handler(event, context, callback) {
  const data = event.body;
  const envCode = '123';
  const { discountCode, ...bookingObject } = JSON.parse(data);
  const { name, email, bookingDate, startTime, endTime } = bookingObject;
  console.log(bookingObject);
  if (!(name && email && bookingDate && startTime && endTime)) {
    callback(null, {
      statusCode: 403,
      body: JSON.stringify({
        errorMessage: 'Your booking is missing information, check the form',
        errorType: 'form',
      }),
    });
  } else if (discountCode !== envCode) {
    callback(null, {
      statusCode: 403,
      body: JSON.stringify({
        errorMessage: 'Your code is invalid',
        errorType: 'coupon',
      }),
    });
  } else {
    instance
      .post('/hey', bookingObject)
      .then(response => {
        console.log('got a response');
        console.log(response.data);
        const mailOptions = {
          from: '"Chiswick Rehearsal Room"',
          to: bookingObject.email,
          subject: `Booking Confirmation for Chiswick Rehearsal Room`,
          text: 'Plaintext version of the message',
          html: `
            <div>
              <p>Hello ${name},</p>
              <p>Your booking details are:</p>
              <p>${startTime} to ${endTime} on ${bookingDate}</p>
              <p>Please get in touch if you have any questions</p>
          </div>`,
        };
        mailTransport
          .sendMail(mailOptions)
          .then(() => console.log(`messaged ${bookingObject.email}`))
          .catch(error =>
            console.error('There was an error while sending the email:', error),
          );
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({ data: response.data }),
        });
      })
      .catch(() => {
        console.log('The booking failed unexpectedly, send email');
        callback(null, {
          statusCode: 403,
          body: JSON.stringify({
            errorMessage:
              'Booking could not be completed, please contact us by email',
            errorType: 'booking',
          }),
        });
      });
  }
}
