import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const { API } = process.env;

const slots = [
  {
    startTime: '10:00',
    endTime: '12:00',
  },
  {
    startTime: '14:00',
    endTime: '16:00',
  },
];

class CalendarContainer extends Component {
  static contextTypes = {
    firebase: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      bookings: [],
      updatedList: [],
    };
    this.handleChange = this.handleChange.bind(this);
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
      const dateObject = {};
      querySnapshot.docs.forEach(doc => {
        const a = doc.data();
        if (dateObject[a.bookingDate]) {
          dateObject[a.bookingDate] = [...dateObject[a.bookingDate], a];
        } else {
          dateObject[a.bookingDate] = [a];
        }
      });
      console.log(dateObject);

      const updatedList = datesList.map(dateKey => {
        const bookings = dateObject[dateKey];
        if (bookings) {
          return {
            date: dateKey,
            slots: slots.filter(
              slot =>
                !bookings.some(booking => {
                  const bookingStartTime = moment(booking.startTime, 'HH:mm');
                  const bookingEndTime = moment(booking.endTime, 'HH:mm');
                  const slotEndTime = moment(slot.startTime, 'HH:mm');
                  const slotStartTime = moment(slot.endTime, 'HH:mm');
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
          slots,
        };
      });

      console.log(updatedList);

      this.setState({
        bookings: querySnapshot.docs.map(doc => doc.data()),
        loading: false,
        updatedList,
      });
    });
  }

  get bookings() {
    const { firebase } = this.context;
    return firebase.bookings;
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { bookings, loading } = this.state;
    return (
      <div>
        <h1>Current bookings</h1>
        {/* {console.log(bookings)} */}
      </div>
    );
  }
}

export default CalendarContainer;
