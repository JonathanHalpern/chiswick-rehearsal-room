import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import CalendarBooker from '../components/CalendarBooker';
import BookedSlots from '../components/BookedSlots';
import {
  enumerateDaysBetweenDates,
  createDateObject,
  getFreeSlots,
  getBookedSlots,
  getFullyBookedDays,
} from '../services/calendar';

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
      fullyBookedDayStrings: [],
      dateString: '',
      slotIndex: 0,
      isViewingExisting: true,
    };
    this.onDateChange = this.onDateChange.bind(this);
    this.disableTile = this.disableTile.bind(this);
    this.onSlotSelect = this.onSlotSelect.bind(this);
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
      const { timeSlots } = this.props;
      const dateObject = createDateObject(querySnapshot.docs);

      const updatedList = getFreeSlots(datesList, dateObject, timeSlots);
      const bookedList = getBookedSlots(datesList, dateObject, timeSlots);

      const fullyBookedDayStrings = getFullyBookedDays(updatedList);

      this.setState({
        loading: false,
        updatedList,
        bookedList,
        fullyBookedDayStrings,
        slotList: updatedList[0].timeSlots,
        bookedSlot: bookedList[0],
      });
    });
  }

  onDateChange(date) {
    const { updatedList, bookedList } = this.state;
    const dateString = moment(date).format('DD/MM/YYYY');
    const slotListObject = updatedList.find(
      element => element.date === dateString,
    );
    const bookedSlot = bookedList.find(element => element.date === dateString);
    const slotList = slotListObject ? slotListObject.timeSlots : [];
    this.setState({ date, dateString, slotList, bookedSlot });
  }

  onSlotSelect(slotIndex) {
    this.setState({ slotIndex });
    const { onSlotSelect } = this.props;
    const { dateString, slotList } = this.state;
    const slot = slotList[slotIndex];
    onSlotSelect({
      ...slot,
      bookingDate: dateString,
    });
  }

  get bookings() {
    const { firebase } = this.context;
    return firebase.bookings;
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
      isViewingExisting,
      bookedSlot,
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
                {isViewingExisting ? (
                  <BookedSlots bookedList={bookedSlot} />
                ) : (
                  <CalendarBooker
                    onSlotSelect={this.onSlotSelect}
                    timeSlots={slotList}
                    slotIndex={slotIndex}
                  />
                )}
              </Container>
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
