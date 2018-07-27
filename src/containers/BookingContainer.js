import React, { Component } from 'react';
import CartComponent from '../components/CartComponent';
import CalendarBooker from '../components/CalendarBooker';
import BookingDetails from '../components/BookingDetails';
import CouponComponent from '../components/CouponComponent';

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
    this.updateField = this.updateField.bind(this);
    this.validate = this.validate.bind(this);
    this.toggleButton = this.toggleButton.bind(this);
    this.onCouponPurchase = this.onCouponPurchase.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      isProcessing: false,
      isConfirmed: false,
      bookingDate: 'date',
      startTime: 'start',
      endTime: 'end',
      price: 30,
      name: '',
      email: '',
      phoneNumber: '',
      message: '',
      discountCode: '',
      paymentMethod: 'paypal',
      actions: {},
    };
  }

  onAuthorize(data) {
    const {
      price,
      startTime,
      endTime,
      name,
      email,
      phoneNumber,
      message,
    } = this.state;
    fetch(`${API}/paypalProcess`, {
      method: 'post',
      body: JSON.stringify({
        paymentID: data.paymentID,
        payerID: data.payerID,
        price,
        name,
        email,
        phoneNumber,
        data: '31/07/2018',
        startTime,
        endTime,
        message,
        amount: price,
        currency: 'GBP',
        method: 'PayPal',
        couponUsed: false,
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

  onCouponPurchase() {
    const {
      price,
      startTime,
      endTime,
      name,
      email,
      phoneNumber,
      message,
      discountCode,
      paymentMethod,
    } = this.state;
    fetch(`${API}/axios`, {
      method: 'post',
      body: JSON.stringify({
        price,
        name,
        email,
        phoneNumber,
        data: '31/07/2018',
        startTime,
        endTime,
        message,
        amount: 0,
        currency: 'GBP',
        method: paymentMethod,
        discountCode,
      }),
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
      });
  }

  onSlotSelect(slot) {
    const { timeSlots } = this.props;
    this.setState({
      price: timeSlots[slot].price,
    });
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  updateField(fieldName, value) {
    this.setState({
      [fieldName]: value,
    });
  }

  payment() {
    this.setState({
      isProcessing: true,
    });
    const { bookingDate, startTime, endTime, price, discountCode } = this.state;
    return new paypal.Promise((resolve, reject) => {
      fetch(`${API}/paypalPayment`, {
        method: 'post',
        body: JSON.stringify({
          bookingDate,
          startTime,
          endTime,
          price,
          discountCode,
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

  toggleButton() {
    const { name, email, price, startTime, endTime, actions } = this.state;
    return actions && name && email && price && startTime && endTime
      ? actions.enable()
      : actions.disable();
  }

  validate(actions) {
    this.setState({
      actions,
    });
    this.toggleButton(actions);
  }

  render() {
    const {
      isConfirmed,
      isProcessing,
      price,
      name,
      email,
      phoneNumber,
      message,
      discountCode,
      paymentMethod,
    } = this.state;
    const { timeSlots } = this.props;
    return (
      <div>
        <CalendarBooker
          onSlotSelect={this.onSlotSelect}
          timeSlots={timeSlots}
        />
        <BookingDetails
          name={name}
          email={email}
          phoneNumber={phoneNumber}
          message={message}
          discountCode={discountCode}
          paymentMethod={paymentMethod}
          handleChange={this.handleChange}
        />
        {paymentMethod === 'paypal' ? (
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
                isReadyToBook={name && email}
                validate={this.validate}
              />
            )}
          </div>
        ) : (
          <CouponComponent
            onSubmit={this.onCouponPurchase}
            onChange={event => {
              this.updateField('discountCode', event.target.value);
            }}
          />
        )}
      </div>
    );
  }
}

export default BookingContainer;
