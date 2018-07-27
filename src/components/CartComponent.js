import React from 'react';
import ReactDOM from 'react-dom';

let paypal;
if (typeof window !== 'undefined') {
  paypal = require('paypal-checkout');
}

const CartComponent = ({
  client,
  payment,
  onAuthorize,
  onCancel,
  purchase,
  validate,
  isReadyToBook,
}) => {
  const PayPalButton = paypal.Button.driver('react', { React, ReactDOM });
  return (
    <div className="shoppingCart">
      <p>
        You are booking <strong>{purchase}</strong>
      </p>
      <PayPalButton
        client={client}
        payment={payment}
        commit
        onAuthorize={data => onAuthorize(data)}
        onCancel={onCancel}
        validate={validate}
        env="sandbox"
      />
    </div>
  );
};

export default CartComponent;
