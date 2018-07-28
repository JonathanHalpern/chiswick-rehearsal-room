import { createProfile, createPayment } from './paypal';

// Name needs to be unique so just generating a random one

export function handler(event, context, callback) {
  const profile_name = Math.random()
    .toString(36)
    .substring(7);
  if (event.httpMethod !== 'POST' || !event.body) {
    callback(null, {
      statusCode: 200,
      body: {
        message: 'must post',
      },
    });
  }

  const data = event.body;
  const { price } = JSON.parse(data);

  console.log('price is', price);

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

  createProfile((error, web_profile) => {
    // paypal.webProfile.create(create_web_profile_json, (error, web_profile) => {
    if (error) {
      callback(null, {
        statusCode: 500,
        body: JSON.stringify(error),
      });
    } else {
      // Set the id of the created payment experience in payment json
      const experience_profile_id = web_profile.id;
      create_payment_json.experience_profile_id = experience_profile_id;
      createPayment(create_payment_json, callback);
    }
  });
}
