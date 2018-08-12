import React from 'react';
import styled from 'styled-components';
import { compose, withStateHandlers } from 'recompose';
import Button from '@material-ui/core/Button';
import AdjustBooking from '../containers/AdjustBooking';

const Header = styled.p`
  margin: 5px 0;
`;

const StyledButton = styled(Button)`
  display: block !important;
  margin-bottom: 5px !important;
`;

const handlers = withStateHandlers(
  () => ({
    isDialogOpen: false,
    slotToEdit: {},
  }),
  {
    toggleDialog: ({ isDialogOpen }) => () => ({
      isDialogOpen: !isDialogOpen,
    }),
    editSlot: () => slotToEdit => ({
      isDialogOpen: true,
      slotToEdit,
    }),
  },
);

const BookedSlots = compose(handlers)(
  ({
    bookedList,
    toggleDialog,
    isDialogOpen,
    slotToEdit,
    editSlot,
    onConfirm,
    onDelete,
    isProcessing,
  }) => (
    <div>
      <Header>Click on a booking to edit</Header>
      {bookedList &&
        bookedList.bookings.map((bookedSlot, index) => (
          <StyledButton
            variant="outlined"
            onClick={() => {
              editSlot(bookedSlot);
            }}
            key={index}
            disabled={isProcessing}>
            {bookedSlot.name}: {bookedSlot.startTime}-{bookedSlot.endTime}
          </StyledButton>
        ))}
      {isDialogOpen && (
        <AdjustBooking
          toggleDialog={toggleDialog}
          {...slotToEdit}
          onConfirm={onConfirm}
          onDelete={onDelete}
        />
      )}
    </div>
  ),
);

export default BookedSlots;
