import { deleteTempBookings } from './firebase';

export function handler(event, context, callback) {
  if (event.httpMethod !== 'POST' || !event.body) {
    callback(null, {
      statusCode: 405,
      body: JSON.stringify({
        message: 'API only accepts posts',
      }),
    });
  }

  const data = event.body;
  const { bookingIds } = JSON.parse(data);

  console.log('cancel', bookingIds);

  deleteTempBookings({ bookingIds });
}
