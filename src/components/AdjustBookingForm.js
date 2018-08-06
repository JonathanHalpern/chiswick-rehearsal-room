import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const StlyedForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
`;

const StyledTextField = styled(TextField)`
  margin-right: 20px !important;
`;

const StyledButton = styled(Button)`
  margin: 10px 0 !important;
`;

const AdjustBookingForm = ({
  name,
  email,
  phoneNumber,
  startTime,
  endTime,
  bookingDate,
  handleChange,
  onSubmit,
  isSubmitting,
}) => (
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
    <StyledButton
      variant="contained"
      color="primary"
      onClick={onSubmit}
      disabled={isSubmitting || !email}>
      {isSubmitting ? 'Sending' : 'Send'} message
    </StyledButton>
  </StlyedForm>
);

export default AdjustBookingForm;
