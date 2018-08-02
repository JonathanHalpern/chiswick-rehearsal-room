import moment from 'moment';

export const enumerateDaysBetweenDates = (startDate, endDate) => {
  const dates = [];

  const currDate = moment(startDate).startOf('day');
  const lastDate = moment(endDate).startOf('day');

  do {
    const currentDate = currDate.format('DD/MM/YYYY');
    dates.push(currentDate);
  } while (currDate.add(1, 'days').diff(lastDate) < 0);

  return dates;
};

export const createDateObject = docs => {
  const dateObject = {};
  docs.forEach(doc => {
    const a = doc.data();
    if (dateObject[a.bookingDate]) {
      dateObject[a.bookingDate] = [...dateObject[a.bookingDate], a];
    } else {
      dateObject[a.bookingDate] = [a];
    }
  });
  return dateObject;
};

export const getFreeSlots = (datesList, dateObject, timeSlots) =>
  datesList.map(dateKey => {
    const bookings = dateObject[dateKey];
    const today = moment().format('DD/MM/YYYY');
    const currentTime = moment(moment(), 'HH:mm');
    const isToday = dateKey === today;
    if (bookings || isToday) {
      return {
        date: dateKey,
        timeSlots: timeSlots.filter(slot => {
          const slotStartTime = moment(slot.startTime, 'HH:mm');
          const slotEndTime = moment(slot.endTime, 'HH:mm');
          if (isToday && slotStartTime.isBefore(currentTime)) {
            return false;
          }
          if (bookings) {
            return !bookings.some(booking => {
              const bookingStartTime = moment(booking.startTime, 'HH:mm');
              const bookingEndTime = moment(booking.endTime, 'HH:mm');
              return !(
                bookingEndTime.isSameOrBefore(slotStartTime) ||
                bookingStartTime.isSameOrAfter(slotEndTime)
              );
            });
          }
          return true;
        }),
      };
    }
    return {
      date: dateKey,
      timeSlots,
    };
  });

export const getFullyBookedDays = list =>
  list
    .filter(listElement => !listElement.timeSlots.length)
    .map(element => element.date);
