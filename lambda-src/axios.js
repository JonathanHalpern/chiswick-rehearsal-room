const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://us-central1-chiswick-rehearsal-room.cloudfunctions.net',
  timeout: 1000,
  headers: { key: 'secret333' },
});

const data = {
  name: 'Bob',
  email: 'jonnyhalpern@gmail.com',
  phoneNumber: '0234234234',
  data: '31/07/2018',
  startTime: '10:00',
  endTime: '12:00',
  message: 'Thanks for the room',
  amount: 60,
  currency: 'GBP',
  method: 'PayPal',
  couponUsed: true,
};

export function handler(event, context, callback) {
  const data = event.body;
  const envCode = '123';
  const { discountCode, ...bookingObject } = JSON.parse(data);

  console.log({ discountCode });
  if (discountCode !== envCode) {
    callback(null, {
      statusCode: 403,
      body: JSON.stringify({ reason: 'wrong code' }),
    });
  } else {
    instance
      .post('/hey', bookingObject)
      .then(response => {
        console.log('got a response');
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({ explanation: response.data }),
        });
      })
      .catch(error => {
        console.log('nobody home :()');
        console.log(error);
      });
  }
}
