import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  margin-left: 30px !important;
`;

const StyledTextField = styled(TextField)`
  margin-top: 0 !important;
`;

const CouponComponent = ({
  className,
  discountCode,
  errorMessage,
  isProcessing,
  isFormComplete,
  onSubmit,
  handleChange,
}) => (
  <form className={`${className || ''}`}>
    <StyledTextField
      required
      id="discountCode"
      label="DiscountCode"
      value={discountCode}
      onChange={handleChange('discountCode')}
      margin="normal"
      error={!!errorMessage}
    />
    <StyledButton
      variant="contained"
      color="primary"
      onClick={onSubmit}
      disabled={isProcessing || !isFormComplete || !discountCode}>
      Purchase with coupon
    </StyledButton>
    {errorMessage && <p>{errorMessage}</p>}
  </form>
);

export default CouponComponent;
