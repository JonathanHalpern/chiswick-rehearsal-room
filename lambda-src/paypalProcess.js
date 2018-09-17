import { deleteTempBookings, confirmBookings } from './firebase';
import { sendBookingAlertMail, sendConfirmationMail } from './email';
import { executePayment } from './paypal';
import { checkIfBookingIsInTime } from './utils';

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
    bookingIds,
    bookingCreationTime,
    ...bookingDetails
  } = JSON.parse(data);

  console.info('id', bookingIds, bookingCreationTime);

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

  if (checkIfBookingIsInTime(bookingCreationTime)) {
    executePayment(paymentID, executePaymentJson, (error, payment) => {
      if (error) {
        console.warn('execute payment failed');
        deleteTempBookings({ bookingIds });
        callback(null, {
          statusCode: 404,
          body: JSON.stringify(error),
        });
      } else if (payment.state === 'approved') {
        console.info(
          'payment completed successfully, description: ',
          payment.transactions[0].description,
        );

        confirmBookings({ bookingIds }).then(() => {
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
        deleteTempBookings({ bookingIds });
        callback(null, {
          statusCode: 404,
          body: JSON.stringify({
            errorMessage: 'payment not approved',
          }),
        });
      }
    });
  } else {
    console.warn('too slow, closing');
    deleteTempBookings({ bookingIds });
    callback(null, {
      statusCode: 404,
      body: JSON.stringify({
        errorMessage:
          'You took to long to book. No payment was taken. Please try again',
      }),
    });
  }
}
