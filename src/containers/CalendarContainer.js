import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Calendar from 'react-calendar';
import CalendarBooker from '../components/CalendarBooker';

const { API } = process.env;

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
    };
    this.onDateChange = this.onDateChange.bind(this);
    this.disableTile = this.disableTile.bind(this);
    this.onSlotSelect = this.onSlotSelect.bind(this);
  }

  componentDidMount() {
    this.setState({
      loading: true,
    });

    const now = moment();
    const twoMonthsLater = moment().add(10, 'days');

    const enumerateDaysBetweenDates = (startDate, endDate) => {
      const dates = [];

      const currDate = moment(startDate).startOf('day');
      const lastDate = moment(endDate).startOf('day');

      while (currDate.add(1, 'days').diff(lastDate) < 0) {
        const currentDate = currDate.format('DD/MM/YYYY');
        dates.push(currentDate);
      }

      return dates;
    };
    const datesList = enumerateDaysBetweenDates(
      now.toDate(),
      twoMonthsLater.toDate(),
    );

    this.bookings.get().then(querySnapshot => {
      const { timeSlots } = this.props;
      const dateObject = {};
      querySnapshot.docs.forEach(doc => {
        const a = doc.data();
        if (dateObject[a.bookingDate]) {
          dateObject[a.bookingDate] = [...dateObject[a.bookingDate], a];
        } else {
          dateObject[a.bookingDate] = [a];
        }
      });

      const updatedList = datesList.map(dateKey => {
        const bookings = dateObject[dateKey];
        if (bookings) {
          return {
            date: dateKey,
            timeSlots: timeSlots.filter(
              slot =>
                !bookings.some(booking => {
                  const bookingStartTime = moment(booking.startTime, 'HH:mm');
                  const bookingEndTime = moment(booking.endTime, 'HH:mm');
                  const slotStartTime = moment(slot.startTime, 'HH:mm');
                  const slotEndTime = moment(slot.endTime, 'HH:mm');
                  return !(
                    bookingEndTime.isSameOrBefore(slotStartTime) ||
                    bookingStartTime.isSameOrAfter(slotEndTime)
                  );
                }),
            ),
          };
        }
        return {
          date: dateKey,
          timeSlots,
        };
      });

      const fullyBookedDaysObjects = updatedList.filter(
        listElement => !listElement.timeSlots.length,
      );
      const fullyBookedDayStrings = fullyBookedDaysObjects.map(
        element => element.date,
      );

      this.setState({
        loading: false,
        updatedList,
        fullyBookedDayStrings,
      });
    });
  }

  onDateChange(date) {
    const { updatedList } = this.state;
    const dateString = moment(date).format('DD/MM/YYYY');
    const slotListObject = updatedList.find(
      element => element.date === dateString,
    );
    const slotList = slotListObject ? slotListObject.timeSlots : [];
    this.setState({ date, dateString, slotList });
  }

  onSlotSelect(slot) {
    const { onSlotSelect } = this.props;
    const { dateString } = this.state;
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
    const { loading, date, slotList } = this.state;
    return (
      <div>
        <h1>Current bookings</h1>
        {!loading && (
          <div>
            <Calendar
              onChange={this.onDateChange}
              value={date}
              tileDisabled={this.disableTile}
            />
            <CalendarBooker
              onSlotSelect={this.onSlotSelect}
              timeSlots={slotList}
            />
          </div>
        )}
      </div>
    );
  }
}

export default CalendarContainer;
