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
  addKeyToSlots,
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
      date: undefined,
      slotList: [],
      fullyBookedDayStrings: [],
      dateString: '',
      slotIndex: undefined,
    };
    this.onDateChange = this.onDateChange.bind(this);
    this.disableTile = this.disableTile.bind(this);
    this.onSlotSelect = this.onSlotSelect.bind(this);
    this.setNewDate = this.setNewDate.bind(this);
    // this.selectSlot = this.selectSlot.bind(this);
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
      const dateObject = createDateObject(querySnapshot.docs);

      this.createFreeSlots(datesList, dateObject);

      // console.log(dateObject);
      // const updatedList = addKeyToSlots(
      //   getFreeSlots(datesList, dateObject, timeSlots),
      // );
      // console.log(updatedList);
      //
      // const fullyBookedDayStrings = getFullyBookedDays(updatedList);
      //
      // this.setNewDate({ date, updatedList });
      //
      this.setState({
        datesList,
        dateObject,
      });
    });
  }

  componentWillUpdate(nextProps) {
    const { selectedSlots } = this.props;
    const { datesList, dateObject } = this.state;
    if (selectedSlots.length !== nextProps.selectedSlots.length) {
      const newDateObject = { ...dateObject };
      nextProps.selectedSlots.forEach(slot => {
        console.log(slot);
        newDateObject[slot.bookingDate] = [
          ...(newDateObject[slot.bookingDate] || []),
          slot,
        ];
      });
      console.log(dateObject, newDateObject);
      this.createFreeSlots(datesList, newDateObject);
    }
  }

  onDateChange(date) {
    const { updatedList } = this.state;
    this.setNewDate({ date, updatedList });
  }

  onSlotSelect(slot) {
    const { dateString } = this.state;
    const { onSlotSelect } = this.props;
    onSlotSelect({
      ...slot,
      bookingDate: dateString,
    });
  }

  // onSlotSelect(slotIndex) {
  //   this.setState({ slotIndex });
  //   const { dateString, slotList } = this.state;
  //   const { onSlotSelect } = this.props;
  //   const slot = slotList[slotIndex];
  //   onSlotSelect({
  //     ...slot,
  //     bookingDate: dateString,
  //   });
  // }

  get bookings() {
    const { firebase } = this.context;
    return firebase.bookings;
  }

  setNewDate({ date, updatedList }) {
    const slotIndex = undefined;
    const dateString = moment(date).format('DD/MM/YYYY');
    const slotListObject = updatedList.find(
      element => element.date === dateString,
    );
    const slotList = slotListObject ? slotListObject.timeSlots : [];
    this.setState({ date, dateString, slotList, slotIndex });
  }

  createFreeSlots(datesList, dateObject) {
    const { timeSlots } = this.props;
    const { date } = this.state;
    console.log(dateObject);
    const updatedList = addKeyToSlots(
      getFreeSlots(datesList, dateObject, timeSlots),
    );
    console.log(updatedList);

    const fullyBookedDayStrings = getFullyBookedDays(updatedList);

    this.setNewDate({ date, updatedList });

    this.setState({
      loading: false,
      updatedList,
      fullyBookedDayStrings,
    });
  }
  // selectSlot(slotIndex, dateString, slotList) {
  //   const { onSlotSelect } = this.props;
  //   const slot = slotList[slotIndex];
  //   onSlotSelect({
  //     ...slot,
  //     bookingDate: dateString,
  //   });
  // }

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
    const { isProcessing } = this.props;
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
            {date ? (
              <CalendarBooker
                onSlotSelect={this.onSlotSelect}
                timeSlots={slotList}
                slotIndex={slotIndex}
                isProcessing={isProcessing}
              />
            ) : (
              <p>Select a date</p>
            )}
          </Container>
        )}
      </div>
    );
  }
}

export default CalendarContainer;
