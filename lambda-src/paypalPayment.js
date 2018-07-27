const paypal = require('paypal-rest-sdk');

paypal.configure({
  mode: 'sandbox', // sandbox or live
  client_id: process.env.PAYPAL_SANDBOX_CLIENT_ID, // run: firebase functions:config:set paypal.client_id="yourPaypalClientID"
  client_secret: process.env.PAYPAL_SECRET, // run: firebase functions:config:set paypal.client_secret="yourPaypalClientSecret"
});

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
  const { bookingDate, startTime, endTime, price, discountCode } = JSON.parse(
    data,
  );

  if (discountCode) {
    if (discountCode === '123') {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify('correct'),
      });
    } else {
      callback(null, {
        statusCode: 403,
        body: JSON.stringify('not a valid code'),
      });
    }
  }

  console.log('price is', price);

  const create_web_profile_json = {
    name: profile_name,
    presentation: {
      brand_name: 'Best Brand',
      logo_image:
        'https://www.paypalobjects.com/webstatic/mktg/logo/AM_SbyPP_mc_vs_dc_ae.jpg',
      locale_code: 'GB',
    },
    input_fields: {
      allow_note: true,
      no_shipping: 1,
      address_override: 1,
    },
    flow_config: {
      landing_page_type: 'billing',
      bank_txn_pending_url: 'http://www.yeowza.com',
    },
  };

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

  paypal.webProfile.create(create_web_profile_json, (error, web_profile) => {
    if (error) {
      callback(null, {
        statusCode: 500,
        body: JSON.stringify(error),
      });
    } else {
      // Set the id of the created payment experience in payment json
      const experience_profile_id = web_profile.id;
      create_payment_json.experience_profile_id = experience_profile_id;

      paypal.payment.create(create_payment_json, (error, payment) => {
        if (error) {
          callback(null, {
            statusCode: 500,
            body: JSON.stringify(error),
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
  });
}
