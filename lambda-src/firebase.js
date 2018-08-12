import axios from 'axios';

require('dotenv').config();

const instance = axios.create({
  baseURL: process.env.FIREBASE_BASE_URL,
  headers: { key: process.env.FIREBASE_FUNCTIONS_KEY },
});

export const createBooking = bookingObject =>
  instance.post('/createNewBooking', bookingObject);

export const createAdminBooking = bookingObject =>
  instance.post('/createAdminBooking', bookingObject);

export const editAdminBooking = bookingObject =>
  instance.post('/editAdminBooking', bookingObject);

export const deleteTempBooking = bookingId =>
  instance.post('/deleteTempBooking', bookingId);

export const confirmBooking = bookingId =>
  instance.post('/confirmTempBooking', bookingId);
