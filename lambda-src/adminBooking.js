import { createAdminBooking } from './firebase';

require('dotenv').config();

export function handler(event, context, callback) {
  const data = event.body;
  const { bookingDate, startTime, endTime, token } = JSON.parse(data);
  console.log(bookingDate, startTime, endTime);
  const bookingObject = {
    bookingDate,
    startTime,
    endTime,
    name: 'admin',
    price: 0,
    currency: 'GBP',
    email: '',
    phoneNumber: '',
    method: 'admin',
    isConfirmed: true,
    token,
  };
  if (!(bookingDate && startTime && endTime)) {
    callback(null, {
      statusCode: 403,
      body: JSON.stringify({
        errorMessage: 'Your booking is missing information, check the form',
        errorType: 'form',
      }),
    });
  } else {
    createAdminBooking(bookingObject)
      .then(response => {
        console.log('booking created');
        callback(null, {
          statusCode: 201,
          body: JSON.stringify({ data: response.data }),
        });
      })
      .catch(error => {
        console.log('Problem booking slot');
        console.log(error.response.data);
        callback(null, {
          statusCode: 404,
          body: JSON.stringify({
            errorMessage: error.response.data,
          }),
        });
      });
  }
}
