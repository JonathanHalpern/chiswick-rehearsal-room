const paypal = require('paypal-rest-sdk');

paypal.configure({
  mode: 'sandbox', // sandbox or live
  client_id: process.env.PAYPAL_CLIENT_ID, // run: firebase functions:config:set paypal.client_id="yourPaypalClientID"
  client_secret: process.env.PAYPAL_SECRET, // run: firebase functions:config:set paypal.client_secret="yourPaypalClientSecret"
});

const create_payment_json = {
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
            price: '1.00',
            currency: 'USD',
            quantity: 1,
          },
        ],
      },
      amount: {
        currency: 'USD',
        total: '1.00',
      },
      description: 'This is the payment description.',
    },
  ],
};

export function handler(event, context, callback) {
  if (event.httpMethod !== 'POST' || !event.body) {
    callback(null, {
      statusCode: 200,
      body: {
        message: 'must post',
      },
    });
  }

  paypal.payment.create(create_payment_json, (error, payment) => {
    if (error) {
      callback(null, {
        statusCode: 400,
        body: JSON.stringify({ msg: 'poop' }),
      });
    } else {
      console.log('Create Payment Response');
      console.log(payment);
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(payment),
      });
    }
  });
}
