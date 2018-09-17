import { createBookings } from './firebase';
import { sendBookingAlertMail, sendConfirmationMail } from './email';

require('dotenv').config();

export function handler(event, context, callback) {
  const data = event.body;
  const {
    discountCode,
    bookingAlertEmail,
    selectedSlots,
    ...bookingInfo
  } = JSON.parse(data);
  const { name, email, phoneNumber } = bookingInfo;
  console.log(bookingInfo);
  if (!(name && email)) {
    callback(null, {
      statusCode: 403,
      body: JSON.stringify({
        errorMessage: 'Your booking is missing information, check the form',
        errorType: 'form',
      }),
    });
  } else if (discountCode !== process.env.DISCOUNT_CODE) {
    callback(null, {
      statusCode: 403,
      body: JSON.stringify({
        errorMessage: 'Your code is invalid',
        errorType: 'coupon',
      }),
    });
  } else {
    createBookings({ selectedSlots, ...bookingInfo, isConfirmed: true })
      .then(() => {
        sendBookingAlertMail({
          name,
          email,
          phoneNumber,
          selectedSlots,
          bookingAlertEmail,
        });
        sendConfirmationMail({ name, email, selectedSlots })
          .then(response => {
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
        console.log('Problem booking slot');
        console.log(error, error.data);
        callback(null, {
          statusCode: 404,
          body: JSON.stringify({
            errorMessage: 'Slot is taken',
          }),
        });
      });
  }
}
