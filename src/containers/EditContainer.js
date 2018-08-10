import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import CalendarBooker from '../components/CalendarBooker';
import BookedSlots from '../components/BookedSlots';
import {
  enumerateDaysBetweenDates,
  createDateObject,
  getFreeSlots,
  getBookedSlots,
} from '../services/calendar';

const { API } = process.env;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledCalendar = styled(Calendar)`
  margin: 0 30px 30px 0;
  .react-calendar__month-view__days__day--weekend {
    color: initial;
    font-weight: bold;
  }
`;

class CalendarContainer extends Component {
  static contextTypes = {
    firebase: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      updatedList: [],
      date: new Date(),
      slotList: [],
      dateString: '',
      slotIndex: undefined,
      bookedSlot: {
        bookings: [],
      },
    };
    this.onDateChange = this.onDateChange.bind(this);
    this.setNewDate = this.setNewDate.bind(this);
    this.disableTile = this.disableTile.bind(this);
    this.onSlotSelect = this.onSlotSelect.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onCreateAdminBooking = this.onCreateAdminBooking.bind(this);
  }

  componentDidMount() {
    const { firebase } = this.context;
    firebase
      .auth()
      .currentUser.getIdTokenResult()
      .then(idTokenResult => {
        if (idTokenResult.claims.admin) {
          this.setState({
            isAuthed: true,
          });
        } else {
          this.setState({
            isAuthed: false,
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
    const { maxDaysAhead } = this.props;
    this.setState({
      loading: true,
    });

    const now = moment();
    const twoMonthsLater = moment().add(maxDaysAhead, 'days');

    const datesList = enumerateDaysBetweenDates(
      now.toDate(),
      twoMonthsLater.toDate(),
    );

    this.bookings.onSnapshot(querySnapshot => {
      console.log('new snapshot');
      const { timeSlots } = this.props;
      const { date } = this.state;
      const dateObject = createDateObject(querySnapshot.docs);
      const updatedList = getFreeSlots(datesList, dateObject, timeSlots);
      const bookedList = getBookedSlots(datesList, dateObject, timeSlots);

      this.setNewDate({ date, updatedList, bookedList });

      this.setState({
        loading: false,
        updatedList,
        bookedList,
      });
    });
  }

  onConfirm(edittedBooking) {
    const { firebase } = this.context;
    const { bookingId, ...newDetails } = edittedBooking;
    firebase.bookings.doc(bookingId).update({
      ...newDetails,
    });
  }

  onCreateAdminBooking() {
    const { firebase } = this.context;
    this.setState({
      isProcessing: true,
      errorMessage: '',
    });
    const { startTime, endTime, dateString } = this.state;
    firebase
      .auth()
      .currentUser.getIdToken(true)
      .then(token => {
        fetch(`${API}/adminBooking`, {
          method: 'post',
          body: JSON.stringify({
            startTime,
            endTime,
            bookingDate: dateString,
            token,
          }),
        })
          .then(response => {
            console.log('done!');
            this.setState({
              isProcessing: false,
              slotIndex: undefined,
            });
            if (!response.ok) {
              throw response;
            }
          })
          .catch(err => {
            err.text().then(errorObject => {
              const { errorMessage } = JSON.parse(errorObject);
              this.setState({
                errorMessage,
              });
            });
          });
      })
      .catch(err => {
        // TODO: do we need this?
        console.error('whats going on');
      });
  }

  onDelete(bookingId) {
    const { firebase } = this.context;
    firebase.bookings.doc(bookingId).delete();
  }

  onDateChange(date) {
    const { updatedList, bookedList } = this.state;
    this.setNewDate({ date, updatedList, bookedList });
  }

  onSlotSelect(slotIndex) {
    const { slotList } = this.state;
    const slot = slotList[slotIndex];
    const { startTime, endTime } = slot;
    this.setState({ slotIndex, startTime, endTime });
  }

  get bookings() {
    const { firebase } = this.context;
    return firebase.bookings;
  }

  setNewDate({ date, updatedList, bookedList }) {
    const dateString = moment(date).format('DD/MM/YYYY');
    const slotListObject = updatedList.find(
      element => element.date === dateString,
    );
    const bookedSlot = bookedList.find(element => element.date === dateString);
    const slotList = slotListObject ? slotListObject.timeSlots : [];
    this.setState({ date, dateString, slotList, bookedSlot });
  }

  disableTile({ date }) {
    const momentDate = moment(date);
    const yesterday = moment().subtract(1, 'day');
    if (momentDate.isBefore(yesterday)) {
      return true;
    }
    return false;
  }

  render() {
    const {
      loading,
      date,
      slotList,
      slotIndex,
      isAuthed,
      bookedSlot,
      isProcessing,
      errorMessage,
    } = this.state;
    return (
      <div>
        {isAuthed ? (
          <div>
            {!loading && (
              <Container>
                <StyledCalendar
                  onChange={this.onDateChange}
                  value={date}
                  tileDisabled={this.disableTile}
                  minDetail="month"
                />
                <div>
                  <CalendarBooker
                    onSlotSelect={this.onSlotSelect}
                    timeSlots={slotList}
                    slotIndex={slotIndex}
                    isProcessing={isProcessing}
                  />
                  {bookedSlot.bookings.length > 0 && <Divider />}
                  {bookedSlot.bookings.length > 0 && (
                    <BookedSlots
                      bookedList={bookedSlot}
                      onConfirm={this.onConfirm}
                      onDelete={this.onDelete}
                      isProcessing={isProcessing}
                    />
                  )}
                </div>
              </Container>
            )}
            {errorMessage && <p>{errorMessage}</p>}
            {slotList.length > 0 && (
              <Button
                variant="raised"
                onClick={this.onCreateAdminBooking}
                disabled={isProcessing}>
                {isProcessing ? 'Booking...' : 'Create booking'}
              </Button>
            )}
          </div>
        ) : (
          <p>This page is only for admins</p>
        )}
      </div>
    );
  }
}

export default CalendarContainer;
