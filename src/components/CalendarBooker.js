import React from 'react';

const CalendarBooker = ({ onSlotSelect }) => (
  <div>
    <button
      onClick={() => {
        onSlotSelect(1);
      }}>
      Slot 1
    </button>
    <button
      onClick={() => {
        onSlotSelect(2);
      }}>
      Slot 2
    </button>
  </div>
);

export default CalendarBooker;
