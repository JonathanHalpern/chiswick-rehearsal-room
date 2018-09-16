import React, { Component } from 'react';
import styled from 'styled-components';
import CartComponent from '../components/CartComponent';
import CalendarContainer from './CalendarContainer';
import BookingDetails from '../components/BookingDetails';
import CouponComponent from '../components/CouponComponent';
import BookingConfirmed from '../components/BookingConfirmed';
import TermsAndConditions from '../components/TermsAndConditions';
import SelectedSlots from '../components/SelectedSlots';

let paypal;
if (typeof window !== 'undefined') {
  paypal = require('paypal-checkout');
}

let onChangeForm = () => {};

const { API } = process.env;

const isValid = state => {
  const {
    name,
    email,
    phoneNumber,
    price,
    startTime,
    endTime,
    hasAgreedTerms,
    selectedSlots,
  } = state;
  const isValid =
    name &&
    email &&
    phoneNumber &&
    price &&
    selectedSlots.length > 0 &&
    // startTime &&
    // endTime &&
    hasAgreedTerms;
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

const ErrorMessage = styled.p`
  color: red;
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
    this.onRemoveSlot = this.onRemoveSlot.bind(this);
    this.updateTermAgreement = this.updateTermAgreement.bind(this);
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
      hasAgreedTerms: false,
      paymentMethod: 'paypal',
      couponMessage: '',
      errorMessage: '',
      selectedSlots: [],
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
      bookingIds,
      bookingCreationTime,
      selectedSlots,
    } = this.state;

    console.log(
      data,
      price,
      bookingDate,
      startTime,
      endTime,
      name,
      email,
      phoneNumber,
      message,
      bookingIds,
      bookingCreationTime,
      selectedSlots,
    );

    // const selectedSlots = [{ startTime, endTime, bookingDate }];
    fetch(`${API}/paypalProcess`, {
      method: 'post',
      body: JSON.stringify({
        paymentID: data.paymentID,
        payerID: data.payerID,
        price,
        name,
        email,
        phoneNumber,
        // bookingDate,
        // startTime,
        // endTime,
        message,
        currency: 'GBP',
        method: 'PayPal',
        couponUsed: false,
        bookingAlertEmail,
        bookingIds,
        bookingCreationTime,
        selectedSlots,
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
      .catch(error => {
        error.text().then(errorObject => {
          const { errorMessage } = JSON.parse(errorObject);
          this.setState({
            errorMessage,
          });
        });
      });
  }

  onCancel() {
    const { bookingIds } = this.state;
    fetch(`${API}/paypalCancel`, {
      method: 'post',
      body: JSON.stringify({
        bookingIds,
      }),
    });
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
      selectedSlots,
    } = this.state;
    console.log(selectedSlots);
    // const selectedSlots = [{ startTime, endTime, bookingDate }];
    fetch(`${API}/couponBooking`, {
      method: 'post',
      body: JSON.stringify({
        selectedSlots,
        // price: 0,
        name,
        email,
        phoneNumber,
        // bookingDate,
        // startTime,
        // endTime,
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
      selectedSlots: [],
    });
  }

  onSlotSelect(selectedSlot) {
    console.log(selectedSlot);
    const { selectedSlots } = this.state;
    // const newSlot = {
    //   startTime,
    //   endTime,
    //   bookingDate,
    //   price,
    // };
    // console.log(selectedSlots);
    const newSelectedSlots = [...selectedSlots, selectedSlot];
    this.setState({
      selectedSlots: newSelectedSlots,
      price: newSelectedSlots.reduce((acc, p) => acc + p.price, 0),
    });
  }

  onRemoveSlot(slotKey) {
    console.log('remove', slotKey);
    const { selectedSlots } = this.state;
    const newSelectedSlots = selectedSlots.filter(
      slots => slots.key !== slotKey,
    );
    // const newSelectedSlots = [...selectedSlots, selectedSlot];
    this.setState({
      selectedSlots: newSelectedSlots,
      price: newSelectedSlots.reduce((acc, p) => acc + p.price, 0),
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
    const { bookingAlertEmail } = this.props;
    const {
      bookingDate,
      startTime,
      endTime,
      price,
      discountCode,
      name,
      email,
      phoneNumber,
      message,
      selectedSlots,
    } = this.state;
    console.warn(price);
    // const selectedSlots = [{ startTime, endTime, bookingDate }];
    return new paypal.Promise((resolve, reject) => {
      fetch(`${API}/paypalPayment`, {
        method: 'post',
        body: JSON.stringify({
          // bookingDate,
          // startTime,
          // endTime,
          selectedSlots,
          price,
          discountCode,
          name,
          email,
          phoneNumber,
          message,
          currency: 'GBP',
          method: 'PayPal',
          couponUsed: false,
          bookingAlertEmail,
        }),
      })
        .then(response => {
          if (!response.ok) {
            throw response;
          }
          return response.json();
        })
        .then(response => {
          console.log(response);
          this.setState({
            bookingIds: response.bookingIds,
            bookingCreationTime: response.bookingCreationTime,
          });
          resolve(response.payment.id);
        })
        .catch(error => {
          error.text().then(errorObject => {
            const { errorMessage } = errorObject;
            this.setState({
              isProcessing: false,
              errorMessage,
            });
          });
          reject('error');
        });
    });
  }

  updateTermAgreement(event) {
    this.setState({
      hasAgreedTerms: event.target.checked,
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
    const { timeSlots, maxDaysAhead, termsAndCondtionsHTML } = this.props;
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
      hasAgreedTerms,
      selectedSlots,
    } = this.state;
    return (
      <div>
        {isConfirmed && <BookingConfirmed onClick={this.onNewBooking} />}
        <Container isVisible={!isConfirmed}>
          {!isConfirmed && (
            <CalendarContainer
              onSlotSelect={this.onSlotSelect}
              timeSlots={timeSlots}
              maxDaysAhead={maxDaysAhead}
              isProcessing={isProcessing}
              selectedSlots={selectedSlots}
            />
          )}
          {selectedSlots.length > 0 && (
            <SelectedSlots
              slots={selectedSlots}
              onRemoveSlot={this.onRemoveSlot}
              totalPrice={price}
            />
          )}
          <BookingDetails
            name={name}
            email={email}
            phoneNumber={phoneNumber}
            message={message}
            discountCode={discountCode}
            paymentMethod={paymentMethod}
            hasAgreedTerms={hasAgreedTerms}
            handleChange={this.handleChange}
            updateTermAgreement={this.updateTermAgreement}
          />
          <TermsAndConditions
            hasAgreedTerms={hasAgreedTerms}
            updateTermAgreement={this.updateTermAgreement}
            termsAndCondtionsHTML={termsAndCondtionsHTML}
          />
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
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
            isFormComplete={
              !!(
                name &&
                email &&
                phoneNumber &&
                hasAgreedTerms &&
                selectedSlots.length > 0
              )
            }
            isVisible={paymentMethod === 'coupon'}
          />
        </Container>
      </div>
    );
  }
}

export default BookingContainer;
