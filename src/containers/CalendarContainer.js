import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import CalendarBooker from '../components/CalendarBooker';
import {
  enumerateDaysBetweenDates,
  createDateObject,
  getFreeSlots,
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
    };
    this.onDateChange = this.onDateChange.bind(this);
    this.disableTile = this.disableTile.bind(this);
    this.onSlotSelect = this.onSlotSelect.bind(this);
  }

  componentDidMount() {
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
      const { timeSlots, onSlotSelect } = this.props;
      const dateObject = createDateObject(querySnapshot.docs);

      const updatedList = getFreeSlots(datesList, dateObject, timeSlots);

      const fullyBookedDayStrings = getFullyBookedDays(updatedList);
      const slotList = updatedList[0].timeSlots;
      const initialSlot = slotList[0];
      onSlotSelect({
        ...initialSlot,
        bookingDate: now.format('DD/MM/YYYY'),
      });
      this.setState({
        loading: false,
        updatedList,
        fullyBookedDayStrings,
        slotList,
      });
    });
  }

  onDateChange(date) {
    const { updatedList } = this.state;
    const { onSlotSelect } = this.props;
    const dateString = moment(date).format('DD/MM/YYYY');
    const slotListObject = updatedList.find(
      element => element.date === dateString,
    );
    const slotList = slotListObject ? slotListObject.timeSlots : [];
    const initialSlot = slotList[0];
    onSlotSelect({
      ...initialSlot,
      bookingDate: dateString,
    });
    this.setState({ date, dateString, slotList });
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
    const dateString = moment(date).format('DD/MM/YYYY');
    const { fullyBookedDayStrings } = this.state;
    return fullyBookedDayStrings.includes(dateString);
  }

  render() {
    const { loading, date, slotList, slotIndex } = this.state;
    return (
      <div>
        {!loading && (
          <Container>
            <StyledCalendar
              onChange={this.onDateChange}
              value={date}
              tileDisabled={this.disableTile}
              minDetail="month"
            />
            <CalendarBooker
              onSlotSelect={this.onSlotSelect}
              timeSlots={slotList}
              slotIndex={slotIndex}
            />
          </Container>
        )}
      </div>
    );
  }
}

export default CalendarContainer;
