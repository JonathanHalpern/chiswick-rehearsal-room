require('dotenv').config();

export function handler(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      test: process.env.API,
    }),
  });
}
