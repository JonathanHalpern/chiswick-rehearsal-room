import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const StyledButton = styled(Button)`
  margin-left: 30px !important;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
`;

const BookingConfirmed = ({ onClick }) => (
  <Container>
    <p>Thanks for booking Chiswick Rehearsal Room</p>
    <p>You will receive a confirmation email shortly</p>
    <StyledButton variant="contained" color="primary" onClick={onClick}>
      Make another booking
    </StyledButton>
  </Container>
);

export default BookingConfirmed;
