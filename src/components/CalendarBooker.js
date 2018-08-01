import React from 'react';

const CalendarBooker = ({ onSlotSelect, timeSlots }) => (
  <div>
    {timeSlots.map((timeSlot, index) => (
      <button
        type="button"
        key={index}
        onClick={() => {
          onSlotSelect(timeSlot);
        }}>
        <p>{timeSlot.startTime}</p>
        <p>{timeSlot.endTime}</p>
        <p>£{timeSlot.price}</p>
      </button>
    ))}
  </div>
);

export default CalendarBooker;
