const paypal = require('paypal-rest-sdk');
const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://us-central1-chiswick-rehearsal-room.cloudfunctions.net',
  timeout: 1000,
  headers: { key: 'secret333' },
});

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

  console.log(paymentID, execute_payment_json, otherDetails);

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

      instance
        .post('/hey', bookingObject)
        .then(response => {
          console.log(response.data.url);
          console.log(response.data.explanation);
          callback(null, {
            statusCode: 200,
            body: JSON.stringify({ explanation: response.data }),
          });
        })
        .catch(error => {
          console.log(error);
        });

      // callback(null, {
      //   statusCode: 200,
      //   body: JSON.stringify(payment),
      // });
    } else {
      console.warn('payment.state: not approved ?');
      // replace debug url
      callback(null, {
        statusCode: 200,
        body: 'payment failed',
      });
    }
  });
}
