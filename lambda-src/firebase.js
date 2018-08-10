import axios from 'axios';

require('dotenv').config();

const instance = axios.create({
  baseURL: process.env.FIREBASE_BASE_URL,
  headers: { key: process.env.FIREBASE_FUNCTIONS_KEY },
});

export const createBooking = bookingObject => {
  console.log(bookingObject);
  return instance.post('/createBooking', bookingObject);
};

export const createAdminBooking = bookingObject =>
  instance.post('/createAdminBooking', bookingObject);

export const deleteTempBooking = bookingId =>
  instance
    .post('/deleteTempBooking', bookingId)
    .then(response => {
      console.log('booking deleted');
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
      console.log('The booking could not be deleted, !!!send email');
    });

export const confirmBooking = ({ bookingId }) =>
  instance
    .post('/confirmTempBooking', bookingId)
    .then(response => {
      console.log('booking confirmed');
      return response;
    })
    .catch(error => {
      console.log(error);
      console.log('The booking could not be confirmed, !!!send email');
      return error;
    });
