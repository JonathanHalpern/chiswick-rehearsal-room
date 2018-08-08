import React from 'react';
import styled from 'styled-components';
import { compose, withStateHandlers } from 'recompose';
import AdjustBooking from '../containers/AdjustBooking';

const Container = styled.div`
  ${'' /* padding: 15px; */};
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
  }) => (
    <Container>
      {bookedList &&
        bookedList.bookings.map((bookedSlot, index) => (
          <div
            key={index}
            onClick={() => {
              editSlot(bookedSlot);
            }}>
            <p>
              {bookedSlot.name} at {bookedSlot.startTime}
            </p>
          </div>
        ))}
      {isDialogOpen && (
        <AdjustBooking
          toggleDialog={toggleDialog}
          {...slotToEdit}
          onConfirm={onConfirm}
          onDelete={onDelete}
        />
      )}
    </Container>
  ),
);

export default BookedSlots;
