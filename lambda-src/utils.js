import moment from 'moment';

require('dotenv').config();

const timeTillBookingCancelled = process.env.MINUTES_TILL_CUTOFF;

export const checkIfBookingIsInTime = tempBookingStartTime => {
  const cutOffTime = moment(tempBookingStartTime).add(
    timeTillBookingCancelled,
    'm',
  );
  const now = moment();
  return moment(now).isBefore(cutOffTime);
};
