import React, { Component } from 'react';
import CartComponent from './CartComponent';
import CalendarBooker from './CalendarBooker';

let paypal;
if (typeof window !== 'undefined') {
  paypal = require('paypal-checkout');
}

const { API, PAYPAL_SANDBOX_CLIENT_ID } = process.env;

const client = {
  sandbox: PAYPAL_SANDBOX_CLIENT_ID,
  production: 'production key',
};

class BookingContainer extends Component {
  constructor(props) {
    super(props);
    this.payment = this.payment.bind(this);
    this.onAuthorize = this.onAuthorize.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onSlotSelect = this.onSlotSelect.bind(this);
    this.state = {
      isProcessing: false,
      isConfirmed: false,
      bookingDate: 'date',
      startTime: 'start',
      endTime: 'end',
      price: 30,
    };
  }

  onAuthorize(data) {
    const { price } = this.state;
    fetch(`${API}/paypalProcess`, {
      method: 'post',
      body: JSON.stringify({
        paymentID: data.paymentID,
        payerID: data.payerID,
        price,
      }),
    })
      .then(response => response.json())
      .then(response => {
        this.setState({
          isConfirmed: true,
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

  onSlotSelect(slot) {
    const { timeSlots } = this.props;
    this.setState({
      price: timeSlots[slot].price,
    });
  }

  payment() {
    this.setState({
      isProcessing: true,
    });
    const { bookingDate, startTime, endTime, price } = this.state;
    return new paypal.Promise((resolve, reject) => {
      fetch(`${API}/paypalPayment`, {
        method: 'post',
        body: JSON.stringify({
          bookingDate,
          startTime,
          endTime,
          price,
        }),
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
    const { isConfirmed, isProcessing, price } = this.state;
    const { timeSlots } = this.props;
    return (
      <div>
        <CalendarBooker
          onSlotSelect={this.onSlotSelect}
          timeSlots={timeSlots}
        />
        <div>
          {isProcessing && <p>Processing...</p>}
          {isConfirmed ? (
            <p>Done</p>
          ) : (
            <CartComponent
              client={client}
              payment={this.payment}
              onAuthorize={this.onAuthorize}
              onCancel={this.onCancel}
              purchase={price}
            />
          )}
        </div>
      </div>
    );
  }
}

export default BookingContainer;
