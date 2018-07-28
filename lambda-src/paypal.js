import paypal from 'paypal-rest-sdk';

paypal.configure({
  mode: 'sandbox', // sandbox or live
  client_id: process.env.PAYPAL_SANDBOX_CLIENT_ID, // run: firebase functions:config:set paypal.client_id="yourPaypalClientID"
  client_secret: process.env.PAYPAL_SECRET, // run: firebase functions:config:set paypal.client_secret="yourPaypalClientSecret"
});

export const createProfile = callback => {
  const profileName = Math.random()
    .toString(36)
    .substring(7);

  const createWebProfileJson = {
    name: profileName,
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

  paypal.webProfile.create(createWebProfileJson, callback);
};

export const createPayment = (create_payment_json, callback) => {
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
};
