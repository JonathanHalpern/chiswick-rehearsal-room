import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const StlyedForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
`;

const StyledTextField = styled(TextField)`
  margin-right: 20px !important;
`;

const BookingDetails = ({
  name,
  email,
  phoneNumber,
  message,
  paymentMethod,
  handleChange,
}) => (
  <StlyedForm>
    <StyledTextField
      required
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
      id="message"
      label="Message"
      value={message}
      onChange={handleChange('message')}
      margin="normal"
      fullWidth
    />
    <RadioGroup
      aria-label="Gender"
      name="gender1"
      value={paymentMethod}
      onChange={handleChange('paymentMethod')}>
      <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
      <FormControlLabel value="coupon" control={<Radio />} label="Coupon" />
    </RadioGroup>
  </StlyedForm>
);

export default BookingDetails;
