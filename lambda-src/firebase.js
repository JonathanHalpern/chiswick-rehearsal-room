import axios from 'axios';

require('dotenv').config();

const instance = axios.create({
  baseURL: process.env.FIREBASE_BASE_URL,
  headers: { key: process.env.FIREBASE_FUNCTIONS_KEY },
});

export const createBookings = bookingObject =>
  instance.post('/createNewBookings', bookingObject);

export const deleteTempBookings = bookingIds =>
  instance.post('/deleteTempBookings', bookingIds);

export const confirmBookings = bookingIds =>
  instance.post('/confirmTempBookings', bookingIds);

export const createAdminBooking = bookingObject =>
  instance.post('/createAdminBooking', bookingObject);

export const editAdminBooking = bookingObject =>
  instance.post('/editAdminBooking', bookingObject);
