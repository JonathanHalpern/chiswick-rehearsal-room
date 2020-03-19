import React from 'react';
import styled from 'styled-components';

const StyledTextField = styled.p`
  color: red;
  font-size: 24px;
  padding: 20px;
  text-transform: uppercase;
`;

const Covid = () => (
  <StyledTextField>
    Due to COVID - 19 the room will be closed for booking from Friday 20 March
    until government recommendation allows venues where people gather to be
    reopened.
  </StyledTextField>
);

export default Covid;
