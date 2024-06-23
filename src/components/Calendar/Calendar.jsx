import PropTypes from 'prop-types';
import { CalendarPagination } from '../CalendarPagination/CalendarPagination';
import { CalendarItem } from '../CalendarItem/CalendarItem';
import Icon from '../Icon/Icon.jsx';
import css from './Calendar.module.css';

export const Calendar = ({ data = [], today, selectedDate, handlePrevMonth, handleNextMonth }) => {
  const days = [];
  for (let i = 1; i <= today.dayInMonth; i++) {
    let record = data.find(day => day.day === i);
    let procent = 0;
    if (record) {
      procent = record.procent;
    }
    days[i] = { day: i, procent };
  }

  return (
    <div className={css.calendar}>
      <div className={css.calendarHead}>
        <div className={css.calendarTitle}>Month</div>
        <div className={css.calendarSwitcher}>
          <CalendarPagination today={today} selectedDate={selectedDate} handleNextMonth={handleNextMonth} handlePrevMonth={handlePrevMonth} />
          <button type='button' className={css.calendarTypeBtn}>
          <Icon iconName="pie-chart" width='18' height='18' styles={css.calendarTypeIcon} />
          </button>
        </div>
      </div>
      <div className={css.calendarBody}>
        {days.map(day => (
          <div className={css.calendarItem} key={day.day}>
            <CalendarItem day={day} today={today} />
          </div>
        ))}
      </div>
    </div>
  );
};

Calendar.propTypes = {
  data: PropTypes.array,
  today: PropTypes.object,
  selectedDate: PropTypes.object,
  handlePrevMonth: PropTypes.func,
  handleNextMonth: PropTypes.func
};
