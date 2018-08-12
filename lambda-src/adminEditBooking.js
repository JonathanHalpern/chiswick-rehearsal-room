import { editAdminBooking } from './firebase';

require('dotenv').config();

export function handler(event, context, callback) {
  const data = event.body;
  const bookingObject = JSON.parse(data);
  const { bookingDate, startTime, endTime } = bookingObject;
  console.log(bookingObject);
  if (!(bookingDate && startTime && endTime)) {
    callback(null, {
      statusCode: 403,
      body: JSON.stringify({
        errorMessage: 'Your booking is missing information, check the form',
        errorType: 'form',
      }),
    });
  } else {
    editAdminBooking(bookingObject)
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
