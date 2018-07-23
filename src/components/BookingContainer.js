import React, { Component } from 'react';
import paypal from 'paypal-checkout';
import CartComponent from './CartComponent';

const { API, PAYPAL_SANDBOX_CLIENT_ID } = process.env;

const client = {
  sandbox: PAYPAL_SANDBOX_CLIENT_ID,
  production: 'production key',
};

const onCancel = () => {
  console.log('cancelled');
};

class BookingContainer extends Component {
  constructor(props) {
    super(props);
    this.payment = this.payment.bind(this);
    this.onAuthorize = this.onAuthorize.bind(this);
    this.state = {
      isProcessing: false,
      isBookingComplete: false,
    };
  }

  onAuthorize(data) {
    fetch(`${API}/paypalProcess`, {
      method: 'post',
      body: JSON.stringify({
        paymentID: data.paymentID,
        payerID: data.payerID,
      }),
    })
      .then(response => response.json())
      .then(response => {
        this.setState({
          isBookingComplete: true,
          isProcessing: false,
        });
      })
      .catch(error => {
        console.log('error');
      });
  }

  onCancel(data) {
    console.log(data);
  }

  payment() {
    this.setState({
      isProcessing: false,
    });
    return new paypal.Promise((resolve, reject) => {
      fetch(`${API}/paypalPayment`, {
        method: 'post',
      })
        .then(response => response.json())
        .then(response => {
          console.log(response.id);
          resolve(response.id);
        })
        .catch(error => {
          console.log('error');
          reject(error);
        });
    });
  }

  render() {
    const { isBookingComplete } = this.state;
    return (
      <div>
        {isBookingComplete ? (
          <p>Done</p>
        ) : (
          <CartComponent
            client={client}
            payment={this.payment}
            onAuthorize={this.onAuthorize}
            onCancel={onCancel}
            purchase="the room"
          />
        )}
      </div>
    );
  }
}

export default BookingContainer;
