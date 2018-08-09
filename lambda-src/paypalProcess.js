import { deleteTempBooking, confirmBooking } from './firebase';
import { executePayment } from './paypal';

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
  const {
    paymentID,
    payerID,
    price,
    bookingAlertEmail,
    bookingId,
  } = JSON.parse(data);

  const executePaymentJson = {
    payer_id: payerID,
    transactions: [
      {
        amount: {
          currency: 'GBP',
          total: price,
        },
      },
    ],
  };

  console.log(paymentID, executePaymentJson, bookingId, price);

  executePayment(paymentID, executePaymentJson, (error, payment) => {
    if (error) {
      console.warn('execute payment failed');
      // console.error(error);
      deleteTempBooking({ bookingId });
      callback(null, {
        statusCode: 404,
        body: JSON.stringify(error),
      });
    } else if (payment.state === 'approved') {
      console.info(
        'payment completed successfully, description: ',
        payment.transactions[0].description,
      );

      confirmBooking({ bookingId, bookingAlertEmail, callback });

      // confirmBooking({ bookingId });
    } else {
      console.warn('payment.state: not approved');
      deleteTempBooking({ bookingId });
      callback(null, {
        statusCode: 404,
        body: JSON.stringify({
          message: 'payment not approved',
        }),
      });
    }
  });
}
