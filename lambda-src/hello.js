export function handler(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      stuff: 'read it',
      paypal: process.env.PAYPAL_SANDBOX_CLIENT_ID,
      api: process.env.API,
      test: process.env.TEST_VARIABLE,
      firebase: process.env.FIREBASE_FUNCTIONS_KEY,
      sendGrid: process.env.SENDGRID_API_KEY,
    }),
  });
}
