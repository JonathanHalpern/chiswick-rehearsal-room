import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

import styled from 'styled-components';

const Container = styled.div``;

const Header = styled.p`
  margin: 0 0 10px 0;
`;

const SlotTitle = styled.p`
  margin: 10px 0 0 0;
`;

const Slot = styled.p`
  margin: 0;
  cursor: pointer;
  padding: 0 9px;
  border-radius: 14px;
  display: table;
  :hover {
    background: #ffb8d1;
  }
`;

const getTitlesFromSlots = timeSlots =>
  Array.from(new Set(timeSlots.map(timeSlots => timeSlots.title)));

const CalendarBooker = ({
  onSlotSelect,
  timeSlots,
  slotIndex,
  className,
  isProcessing,
}) => {
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
          {timeSlots
            .filter(timeSlot => timeSlot.title === titleObject)
            .map(timeSlot => {
              index += 1;
              return (
                <Slot
                  key={timeSlot.key}
                  onClick={() => {
                    onSlotSelect(timeSlot);
                  }}>
                  {timeSlot.startTime} to {timeSlot.endTime} - £{timeSlot.price}
                </Slot>
              );
            })}
          {/* <RadioGroup
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
                    disabled={isProcessing}
                    label={`${timeSlot.startTime} to ${timeSlot.endTime} - £${
                      timeSlot.price
                    }`}
                  />
                );
              })}
          </RadioGroup> */}
        </div>
      ))}
    </Container>
  );
};

export default CalendarBooker;
