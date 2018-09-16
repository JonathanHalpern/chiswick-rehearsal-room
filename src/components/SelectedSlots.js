import React from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const BookingDetails = styled.p`
  display: inline;
`;

const SelectedSlotsTitle = styled.p`
  margin: 0;
`;

const TotalPrice = styled.p`
  margin: 0;
`;

const SelectedSlots = ({ slots, onRemoveSlot, totalPrice }) => (
  <div>
    <SelectedSlotsTitle>Your slots:</SelectedSlotsTitle>
    {slots.map(slot => (
      <div key={slot.key}>
        <BookingDetails>
          {slot.bookingDate} from {slot.startTime} to {slot.endTime} : £{
            slot.price
          }
        </BookingDetails>
        <IconButton
          aria-label="Delete"
          onClick={() => {
            onRemoveSlot(slot.key);
          }}>
          <DeleteIcon />
        </IconButton>
      </div>
    ))}
    <TotalPrice>Total: £{totalPrice}</TotalPrice>
  </div>
);

export default SelectedSlots;
