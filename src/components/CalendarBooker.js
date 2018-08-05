import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import styled from 'styled-components';

const Container = styled.div`
  ${'' /* padding: 15px; */};
`;

const Header = styled.p`
  margin: 0 0 10px 0;
`;

const SlotTitle = styled.p`
  margin: 0;
`;

const getTitlesFromSlots = timeSlots =>
  Array.from(new Set(timeSlots.map(timeSlots => timeSlots.title)));

const CalendarBooker = ({ onSlotSelect, timeSlots, slotIndex, className }) => {
  let index = -1;
  return (
    <Container className={className || ''}>
      <Header>
        {timeSlots.length > 0
          ? 'When would you like to book the room?'
          : 'No available slots on this day'}
      </Header>
      {getTitlesFromSlots(timeSlots).map(titleObject => (
        <div key={titleObject}>
          <SlotTitle>{titleObject}</SlotTitle>
          <RadioGroup
            aria-label="TimeSlot"
            name="timeSlot"
            value={`${slotIndex}`}
            onChange={(event, index) => {
              onSlotSelect(index);
            }}>
            {timeSlots
              .filter(timeSlot => timeSlot.title === titleObject)
              .map(timeSlot => {
                index += 1;
                return (
                  <FormControlLabel
                    key={`${timeSlot.title}-${timeSlot.startTime}`}
                    value={`${index}`}
                    control={<Radio />}
                    label={`${timeSlot.startTime} to ${timeSlot.endTime} - £${
                      timeSlot.price
                    }`}
                  />
                );
              })}
          </RadioGroup>
        </div>
      ))}
    </Container>
  );
};

export default CalendarBooker;
