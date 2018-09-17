import React from 'react';
import ReactDOM from 'react-dom';

let paypal;
if (typeof window !== 'undefined') {
  paypal = require('paypal-checkout');
}

const paypalEnvironment = process.env.PAYPAL_ENVIRONMENT;

const CartComponent = ({
  payment,
  onAuthorize,
  onCancel,
  validate,
  className,
}) => {
  const PayPalButton = paypal.Button.driver('react', { React, ReactDOM });
  return (
    <div className={`shoppingCart ${className || ''}`}>
      <PayPalButton
        payment={payment}
        commit
        onAuthorize={data => onAuthorize(data)}
        onCancel={onCancel}
        validate={validate}
        env={paypalEnvironment}
      />
    </div>
  );
};

export default CartComponent;
