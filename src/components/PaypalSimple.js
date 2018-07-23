import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

export default class MyApp extends React.Component {
  render() {
    const client = {
      sandbox:
        'AVQRQZrhx5INZ0hvHyFoj6m_vmp94wl8q4mEIcQ6fbuVdjOesWdUEy-V2fa4peZLtXfzKC5-k9j1mlks',
      production:
        'AVQRQZrhx5INZ0hvHyFoj6m_vmp94wl8q4mEIcQ6fbuVdjOesWdUEy-V2fa4peZLtXfzKC5-k9j1mlks',
    };
    return <PaypalExpressBtn client={client} currency="GBP" total={1.0} />;
  }
}
