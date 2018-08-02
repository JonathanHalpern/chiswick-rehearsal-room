import React, { Component } from 'react';
import styled from 'styled-components';
import CartComponent from '../components/CartComponent';
import CalendarContainer from './CalendarContainer';
import BookingDetails from '../components/BookingDetails';
import CouponComponent from '../components/CouponComponent';
import BookingConfirmed from '../components/BookingConfirmed';

let paypal;
if (typeof window !== 'undefined') {
  paypal = require('paypal-checkout');
}

let onChangeForm = () => {};

const { API } = process.env;

const isValid = state => {
  const { name, email, price, startTime, endTime } = state;
  const isValid = name && email && price && startTime && endTime;
  return isValid;
};

const StyledCartComponent = styled(CartComponent)`
  display: ${({ isVisible }) => (isVisible ? 'initial' : 'none')};
`;

const StyledCouponComponent = styled(CouponComponent)`
  display: ${({ isVisible }) => (isVisible ? 'initial' : 'none')};
`;

const Container = styled.div`
  display: ${({ isVisible }) => (isVisible ? 'initial' : 'none')};
`;

class BookingContainer extends Component {
  constructor(props) {
    super(props);
    this.payment = this.payment.bind(this);
    this.onAuthorize = this.onAuthorize.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onSlotSelect = this.onSlotSelect.bind(this);
    this.validate = this.validate.bind(this);
    this.onCouponPurchase = this.onCouponPurchase.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onNewBooking = this.onNewBooking.bind(this);
    this.state = {
      isProcessing: false,
      isConfirmed: false,
      bookingDate: '',
      startTime: '',
      endTime: '',
      price: '',
      name: '',
      email: '',
      phoneNumber: '',
      message: '',
      discountCode: '',
      paymentMethod: 'paypal',
      couponMessage: '',
      errorMessage: '',
    };
  }

  componentWillUpdate(nextProps, nextState) {
    const { paymentMethod } = nextState;
    if (paymentMethod === 'paypal') {
      onChangeForm(nextState);
    }
  }

  onAuthorize(data) {
    const { bookingAlertEmail } = this.props;
    const {
      price,
      bookingDate,
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
        bookingDate,
        startTime,
        endTime,
        message,
        currency: 'GBP',
        method: 'PayPal',
        couponUsed: false,
        bookingAlertEmail,
      }),
    })
      .then(() => {
        this.setState({
          isConfirmed: true,
          isProcessing: false,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  onCancel() {
    this.setState({
      isProcessing: false,
    });
  }

  onCouponPurchase() {
    const { bookingAlertEmail } = this.props;
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
    fetch(`${API}/couponBooking`, {
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
        bookingAlertEmail,
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

  onSlotSelect({ startTime, endTime, bookingDate, price }) {
    this.setState({
      startTime,
      endTime,
      bookingDate,
      price,
    });
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

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
          resolve(response.id);
        })
        .catch(error => {
          console.log('error');
          reject(error);
        });
    });
  }

  validate(actions) {
    // necessary because the paypal button creates an iFrame so we cannot get a ref to it
    const initialState = this.state;
    isValid(initialState) ? actions.enable() : actions.disable();
    onChangeForm = nextState => {
      isValid(nextState) ? actions.enable() : actions.disable();
    };
  }

  render() {
    const { timeSlots, maxDaysAhead } = this.props;
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
    return (
      <div>
        {isConfirmed && <BookingConfirmed onClick={this.onNewBooking} />}
        <Container isVisible={!isConfirmed}>
          <CalendarContainer
            onSlotSelect={this.onSlotSelect}
            timeSlots={timeSlots}
            maxDaysAhead={maxDaysAhead}
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
          <StyledCartComponent
            payment={this.payment}
            onAuthorize={this.onAuthorize}
            onCancel={this.onCancel}
            purchase={price}
            isReadyToBook={name && email}
            validate={this.validate}
            isVisible={paymentMethod === 'paypal'}
          />
          <StyledCouponComponent
            onSubmit={this.onCouponPurchase}
            handleChange={this.handleChange}
            discountCode={discountCode}
            errorMessage={couponMessage}
            isProcessing={isProcessing}
            isFormComplete={!!(name && email)}
            isVisible={paymentMethod === 'coupon'}
          />
        </Container>
      </div>
    );
  }
}

export default BookingContainer;
