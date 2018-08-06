import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import styled from 'styled-components';
import { compose, withStateHandlers } from 'recompose';
import AdjustBooking from './AdjustBooking';

const Container = styled.div`
  ${'' /* padding: 15px; */};
`;

const Header = styled.p`
  margin: 0 0 10px 0;
`;

const SlotTitle = styled.p`
  margin: 0;
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

// 282731405

const BookedSlots = compose(handlers)(
  ({
    bookedList,
    toggleDialog,
    isDialogOpen,
    slotToEdit,
    editSlot,
    className,
  }) => (
    <Container className={className || ''}>
      {bookedList &&
        bookedList.bookings.map((bookedSlot, index) => (
          <div
            key={index}
            onClick={() => {
              editSlot(bookedSlot);
            }}>
            <p>{bookedSlot.name}</p>
          </div>
        ))}

      <AdjustBooking
        isDialogOpen={isDialogOpen}
        toggleDialog={toggleDialog}
        slotToEdit={slotToEdit}
      />
    </Container>
  ),
);

export default BookedSlots;
