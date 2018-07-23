const paypal = require('paypal-rest-sdk');

paypal.configure({
  mode: 'sandbox', // sandbox or live
  client_id: process.env.PAYPAL_CLIENT_ID, // run: firebase functions:config:set paypal.client_id="yourPaypalClientID"
  client_secret: process.env.PAYPAL_SECRET, // run: firebase functions:config:set paypal.client_secret="yourPaypalClientSecret"
});

// Name needs to be unique so just generating a random one
const profile_name = Math.random()
  .toString(36)
  .substring(7);

export function handler(event, context, callback) {
  if (event.httpMethod !== 'POST' || !event.body) {
    callback(null, {
      statusCode: 200,
      body: {
        message: 'must post',
      },
    });
  }

  const create_web_profile_json = {
    name: profile_name,
    presentation: {
      brand_name: 'Chiswick Rehearsal Room',
      logo_image:
        'https://www.paypalobjects.com/webstatic/mktg/logo/AM_SbyPP_mc_vs_dc_ae.jpg',
      locale_code: 'UK',
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

  paypal.webProfile.create(create_web_profile_json, (error, web_profile) => {
    if (error) {
      throw error;
    } else {
      // Set the id of the created payment experience in payment json
      const experience_profile_id = web_profile.id;
      create_payment_json.experience_profile_id = experience_profile_id;

      paypal.payment.create(create_payment_json, (error, payment) => {
        if (error) {
          throw error;
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
