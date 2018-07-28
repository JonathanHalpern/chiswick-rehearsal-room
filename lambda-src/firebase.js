import axios from 'axios';
import { sendMail } from './email';

const instance = axios.create({
  baseURL: 'https://us-central1-chiswick-rehearsal-room.cloudfunctions.net',
  headers: { key: 'secret333' },
});

export const addBooking = (bookingObject, callback) => {
  const { name, email, startTime, endTime, bookingDate } = bookingObject;
  instance
    .post('/hey', bookingObject)
    .then(response => {
      console.log(response.data);
      const mailOptions = {
        from: '"Chiswick Rehearsal Room"',
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
      sendMail(mailOptions);
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({ data: response.data }),
      });
    })
    .catch(() => {
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
