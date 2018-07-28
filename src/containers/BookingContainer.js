import React, { Component } from 'react';
import CartComponent from '../components/CartComponent';
import CalendarBooker from '../components/CalendarBooker';
import BookingDetails from '../components/BookingDetails';
import CouponComponent from '../components/CouponComponent';
import BookingConfirmed from '../components/BookingConfirmed';

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
    this.onNewBooking = this.onNewBooking.bind(this);
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
      couponMessage: '',
      errorMessage: '',
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
        bookingDate: '31/07/2018',
        startTime,
        endTime,
        message,
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
    this.setState({
      isProcessing: true,
      errorMessage: '',
      couponMessage: '',
    });
    const {
      startTime,
      endTime,
      name,
      email,
      phoneNumber,
      bookingDate,
      message,
      discountCode,
      paymentMethod,
    } = this.state;
    fetch(`${API}/axios`, {
      method: 'post',
      body: JSON.stringify({
        price: 0,
        name,
        email,
        phoneNumber,
        bookingDate,
        startTime,
        endTime,
        message,
        method: paymentMethod,
        discountCode,
      }),
    })
      .then(response => {
        this.setState({
          isProcessing: false,
        });
        if (!response.ok) {
          throw response;
        }
        this.setState({
          isConfirmed: true,
        });
      })
      .catch(err => {
        err.text().then(errorObject => {
          const { errorMessage, errorType } = JSON.parse(errorObject);
          if (errorType === 'coupon') {
            this.setState({
              couponMessage: errorMessage,
            });
          }
          this.setState({
            errorMessage,
          });
        });
      });
  }

  onNewBooking() {
    this.setState({
      isConfirmed: false,
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
      errorMessage,
      couponMessage,
    } = this.state;
    const { timeSlots } = this.props;
    return (
      <div>
        {isConfirmed ? (
          <BookingConfirmed onClick={this.onNewBooking} />
        ) : (
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
            {errorMessage && <p>{errorMessage}</p>}
            {isProcessing && <p>Processing...</p>}
            {paymentMethod === 'paypal' ? (
              <div>
                <CartComponent
                  client={client}
                  payment={this.payment}
                  onAuthorize={this.onAuthorize}
                  onCancel={this.onCancel}
                  purchase={price}
                  isReadyToBook={name && email}
                  validate={this.validate}
                />
              </div>
            ) : (
              <CouponComponent
                onSubmit={this.onCouponPurchase}
                handleChange={this.handleChange}
                errorMessage={couponMessage}
                isProcessing={isProcessing}
              />
            )}
          </div>
        )}
      </div>
    );
  }
}

export default BookingContainer;
