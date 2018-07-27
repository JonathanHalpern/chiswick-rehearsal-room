const serviceAccount = require('./polling-app-88df9-firebase-adminsdk-ze140-38b98b0911.json');

function getAccessToken() {
  return new Promise((resolve, reject) => {
    const key = serviceAccount;
    const jwtClient = new google.auth.JWT(
      key.client_email,
      null,
      key.private_key,
      SCOPES,
      null,
    );
    jwtClient.authorize((err, tokens) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(tokens.access_token);
    });
  });
}

export function handler(event, context, callback) {
  console.log(event);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: 'Hello, World!' }),
  });
}
