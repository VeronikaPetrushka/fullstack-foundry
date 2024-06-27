import PropTypes from 'prop-types';
import CalendarItem from '../CalendarItem/CalendarItem';
import css from './Calendar.module.css';

const Calendar = ({
  daysOfSelectedMonth,
  selectedDate,
  minDay,
  today,
  handleClick,
}) => {
  return (
    <div className={css.calendarBody}>
      {daysOfSelectedMonth.map(day => (
        <div className={css.calendarItem} key={day.day}>
          <CalendarItem
            key={day.fullDate}
            selectedDate={selectedDate}
            dayOfMonth={day}
            minDay={minDay}
            today={today}
            handleClick={handleClick}
          />
        </div>
      ))}
    </div>
  );
};

export default Calendar;

Calendar.propTypes = {
  daysOfSelectedMonth: PropTypes.array.isRequired,
  selectedDate: PropTypes.object.isRequired,
  minDay: PropTypes.object.isRequired,
  today: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};
