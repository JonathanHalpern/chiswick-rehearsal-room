import React from 'react';

const CouponComponent = ({ discountCode, onSubmit, onChange }) => (
  <div>
    <input value={discountCode} onChange={onChange} />
    <button onClick={onSubmit}>Purchase with coupon</button>
  </div>
);

export default CouponComponent;
