import React from 'react';

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
    background: ${({ disabled }) => (disabled ? '#f0f0f0' : '#ffb8d1')};
  }
  background: ${({ disabled }) => (disabled ? '#f0f0f0' : 'none')};
`;

const getTitlesFromSlots = timeSlots =>
  Array.from(new Set(timeSlots.map(timeSlots => timeSlots.title)));

const CalendarBooker = ({
  onSlotSelect,
  timeSlots,
  className,
  isProcessing,
}) => {
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
              return (
                <Slot
                  key={timeSlot.key}
                  disabled={isProcessing}
                  onClick={() => {
                    if (!isProcessing) {
                      onSlotSelect(timeSlot);
                    }
                  }}>
                  {timeSlot.startTime} to {timeSlot.endTime} - £{timeSlot.price}
                </Slot>
              );
            })}
        </div>
      ))}
    </Container>
  );
};

export default CalendarBooker;
