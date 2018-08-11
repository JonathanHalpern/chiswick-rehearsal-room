import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

const StlyedForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
`;

const StyledTextField = styled(TextField)`
  margin-right: 20px !important;
`;

const AdjustBookingForm = ({
  name,
  email,
  phoneNumber,
  startTime,
  endTime,
  bookingDate,
  handleChange,
}) =>
  console.log(bookingDate) || (
    <StlyedForm>
      <StyledTextField
        id="name"
        label="Name"
        value={name}
        onChange={handleChange('name')}
        margin="normal"
      />
      <StyledTextField
        required
        id="email"
        label="Email"
        value={email}
        onChange={handleChange('email')}
        margin="normal"
      />
      <StyledTextField
        id="phoneNumber"
        label="Phone Number"
        value={phoneNumber}
        onChange={handleChange('phoneNumber')}
        margin="normal"
      />
      <StyledTextField
        id="startTime"
        label="Start"
        value={startTime}
        onChange={handleChange('startTime')}
        margin="normal"
        type="time"
      />
      <StyledTextField
        id="endTime"
        label="End"
        value={endTime}
        onChange={handleChange('endTime')}
        margin="normal"
        type="time"
      />
      <StyledTextField
        id="bookingDate"
        label="Booking Date"
        value={bookingDate}
        onChange={handleChange('bookingDate')}
        margin="normal"
        type="date"
      />
    </StlyedForm>
  );

export default AdjustBookingForm;
