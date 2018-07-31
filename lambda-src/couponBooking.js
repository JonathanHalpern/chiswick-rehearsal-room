import { createBooking } from './firebase';

export function handler(event, context, callback) {
  const data = event.body;
  const { discountCode, bookingAlertEmail, ...bookingObject } = JSON.parse(
    data,
  );
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
  } else if (discountCode !== process.env.DISCOUNT_CODE) {
    callback(null, {
      statusCode: 403,
      body: JSON.stringify({
        errorMessage: 'Your code is invalid',
        errorType: 'coupon',
      }),
    });
  } else {
    createBooking({ bookingObject, bookingAlertEmail, callback });
  }
}
