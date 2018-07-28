import { createProfile, createPayment } from './paypal';

export function handler(event, context, callback) {
  if (event.httpMethod !== 'POST' || !event.body) {
    console.warn(`attempted call with method ${event.httpMethod}`);
    callback(null, {
      statusCode: 405,
      body: JSON.stringify({
        message: 'API only accepts posts',
      }),
    });
  }

  const data = event.body;
  const { price } = JSON.parse(data);

  const createPaymentJson = {
    intent: 'sale',
    payer: {
      payment_method: 'paypal',
    },
    redirect_urls: {
      return_url: 'http://return.url',
      cancel_url: 'http://cancel.url',
    },
    transactions: [
      {
        item_list: {
          items: [
            {
              name: 'item',
              sku: 'item',
              price,
              currency: 'GBP',
              quantity: 1,
            },
          ],
        },
        amount: {
          currency: 'GBP',
          total: price,
        },
        description: 'This is the payment description.',
      },
    ],
  };

  createProfile((error, webProfile) => {
    if (error) {
      console.log('create profile failed');
      callback(null, {
        statusCode: 404,
        body: JSON.stringify(error),
      });
    } else {
      createPaymentJson.experience_profile_id = webProfile.id;
      createPayment(createPaymentJson, (error, payment) => {
        if (error) {
          console.log('create payment failed');
          callback(null, {
            statusCode: 404,
            body: JSON.stringify(error),
          });
        } else {
          console.log('create payment successful');
          console.log(payment);
          callback(null, {
            statusCode: 200,
            body: JSON.stringify(payment),
          });
        }
      });
    }
  });
}
