import React from 'react';
import Button from '@material-ui/core/Button';

const BookingConfirmed = ({ onClick }) => (
  <div>
    <p>Thanks for booking Chiswick Rehearsal Room</p>
    <p>You will receive a confirmation email shortly</p>
    <Button variant="contained" color="primary" onClick={onClick}>
      Make another booking
    </Button>
  </div>
);

export default BookingConfirmed;
