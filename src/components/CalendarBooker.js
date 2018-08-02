import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import styled from 'styled-components';

const Container = styled.div`
  ${'' /* padding: 15px; */};
`;

const Header = styled.p`
  margin: 0;
`;

const CalendarBooker = ({ onSlotSelect, timeSlots, slotIndex, className }) => (
  <Container className={className || ''}>
    <Header>
      {timeSlots.length > 0
        ? 'When would you like to book the room?'
        : 'No available slots on this day'}
    </Header>
    <RadioGroup
      aria-label="TimeSlot"
      name="timeSlot"
      value={`${slotIndex}`}
      onChange={(event, index) => {
        onSlotSelect(index);
      }}>
      {timeSlots.map((timeSlot, index) => (
        <FormControlLabel
          key={index}
          value={`${index}`}
          control={<Radio />}
          label={`${timeSlot.startTime} to ${timeSlot.endTime} - £${
            timeSlot.price
          }`}
        />
      ))}
    </RadioGroup>
  </Container>
);

export default CalendarBooker;
