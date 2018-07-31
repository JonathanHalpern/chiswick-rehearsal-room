import axios from 'axios';
import { sendMail } from './email';

require('dotenv').config();

const instance = axios.create({
  baseURL: 'https://us-central1-chiswick-rehearsal-room.cloudfunctions.net',
  headers: { key: process.env.FIREBASE_FUNCTIONS_KEY },
});

export const createBooking = ({
  bookingObject,
  bookingAlertEmail,
  callback,
}) => {
  const {
    name,
    email,
    startTime,
    endTime,
    bookingDate,
    phoneNumber,
  } = bookingObject;
  instance
    .post('/createBooking', bookingObject)
    .then(response => {
      console.log('booking created');
      console.log(bookingObject);
      const notifcationMsg = {
        from: 'no-reply@chiswickrehearsalroom.com',
        to: bookingAlertEmail,
        subject: `Someone booked the room`,
        text: 'Plaintext version of the message',
        html: `
        <div>
          <p>Your have received a new booking from ${name}</p>
          <p>${startTime} to ${endTime} on ${bookingDate}</p>
          <p>If you need to contact them there details are:</p>
          <p>Email: ${email}</p>
          ${phoneNumber && `<p>Phone Number: ${phoneNumber}</p>`}
      </div>`,
      };
      sendMail(notifcationMsg);
      const confirmationMsg = {
        from: 'no-reply@chiswickrehearsalroom.com',
        to: email,
        subject: `Booking Confirmation for Chiswick Rehearsal Room`,
        text: 'Plaintext version of the message',
        html: `
        <div>
          <p>Hello ${name},</p>
          <p>Your booking details are:</p>
          <p>${startTime} to ${endTime} on ${bookingDate}</p>
          <p>Please get in touch if you have any questions</p>
          <p>Regards, Louise</p>
      </div>`,
      };
      sendMail(confirmationMsg)
        .then(() => {
          console.log('mail sent');
          callback(null, {
            statusCode: 201,
            body: JSON.stringify({ data: response.data }),
          });
        })
        .catch(error => {
          console.log('Problem with confirmation email');
          console.log(error);
          callback(null, {
            statusCode: 404,
            body: JSON.stringify({
              errorMessage:
                'Confirmation email not sent, please contact us to check your booking has been made',
            }),
          });
        });
    })
    .catch(error => {
      console.log(error);
      console.log('The booking failed unexpectedly, !!!send email');
      callback(null, {
        statusCode: 403,
        body: JSON.stringify({
          errorMessage:
            'Booking could not be completed, please contact us by email',
          errorType: 'booking',
        }),
      });
    });
};
