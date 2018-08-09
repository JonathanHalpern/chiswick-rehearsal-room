import { deleteTempBooking, confirmBooking } from './firebase';
import { sendBookingAlertMail, sendConfirmationMail } from './email';
import { executePayment } from './paypal';

export function handler(event, context, callback) {
  if (event.httpMethod !== 'POST' || !event.body) {
    callback(null, {
      statusCode: 405,
      body: JSON.stringify({
        message: 'API only accepts posts',
      }),
    });
  }

  const data = event.body;
  const {
    paymentID,
    payerID,
    price,
    bookingAlertEmail,
    bookingId,
    ...bookingDetails
  } = JSON.parse(data);

  const executePaymentJson = {
    payer_id: payerID,
    transactions: [
      {
        amount: {
          currency: 'GBP',
          total: price,
        },
      },
    ],
  };

  executePayment(paymentID, executePaymentJson, (error, payment) => {
    if (error) {
      console.warn('execute payment failed');
      console.error(error);
      deleteTempBooking({ bookingId });
      callback(null, {
        statusCode: 404,
        body: JSON.stringify(error),
      });
    } else if (payment.state === 'approved') {
      console.info(
        'payment completed successfully, description: ',
        payment.transactions[0].description,
      );

      confirmBooking({ bookingId }).then(() => {
        const bookingObject = {
          ...bookingDetails,
          price,
        };
        sendBookingAlertMail({ ...bookingObject, bookingAlertEmail });
        sendConfirmationMail(bookingObject)
          .then(response => {
            console.log('mail sent');
            callback(null, {
              statusCode: 201,
              body: JSON.stringify({ data: response.data }),
            });
          })
          .catch(error => {
            console.log('Problem with confirmation email');
            console.log(error);
            callback(null, {
              statusCode: 404,
              body: JSON.stringify({
                errorMessage:
                  'Confirmation email not sent, please contact us to check your booking has been made',
              }),
            });
          });
      });
    } else {
      console.warn('payment.state: not approved');
      deleteTempBooking({ bookingId });
      callback(null, {
        statusCode: 404,
        body: JSON.stringify({
          message: 'payment not approved',
        }),
      });
    }
  });
}
