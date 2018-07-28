import paypal from 'paypal-rest-sdk';
import { addBooking } from './firebase';

paypal.configure({
  mode: 'sandbox', // sandbox or live
  client_id: process.env.PAYPAL_SANDBOX_CLIENT_ID, // run: firebase functions:config:set paypal.client_id="yourPaypalClientID"
  client_secret: process.env.PAYPAL_SECRET, // run: firebase functions:config:set paypal.client_secret="yourPaypalClientSecret"
});

export function handler(event, context, callback) {
  if (event.httpMethod !== 'POST' || !event.body) {
    callback(null, {
      statusCode: 200,
      body: {},
    });
  }

  const data = event.body;
  const { paymentID, payerID, price, ...otherDetails } = JSON.parse(data);

  const execute_payment_json = {
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

  paypal.payment.execute(paymentID, execute_payment_json, (error, payment) => {
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: 200,
        body: 'payment failed',
      });
    } else if (payment.state === 'approved') {
      console.info(
        'payment completed successfully, description: ',
        payment.transactions[0].description,
      );
      const bookingObject = {
        ...otherDetails,
        price,
      };

      addBooking(bookingObject, callback);
    } else {
      console.warn('payment.state: not approved ?');
      callback(null, {
        statusCode: 200,
        body: 'payment failed',
      });
    }
  });
}
