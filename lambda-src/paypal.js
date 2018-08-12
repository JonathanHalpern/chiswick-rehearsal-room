import paypal from 'paypal-rest-sdk';

require('dotenv').config();

paypal.configure({
  mode: process.env.PAYPAL_SANDBOX_CLIENT_ID, // sandbox or live
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

export const createPayment = (createPaymentJson, callback) => {
  paypal.payment.create(createPaymentJson, callback);
};

export const executePayment = (paymentID, executePaymentJson, callback) => {
  paypal.payment.execute(paymentID, executePaymentJson, callback);
};
