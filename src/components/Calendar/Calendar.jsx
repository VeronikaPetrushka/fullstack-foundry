import PropTypes from 'prop-types';
import { CalendarPagination } from '../CalendarPagination/CalendarPagination';
import { CalendarItem } from '../CalendarItem/CalendarItem';
import Icon from '../Icon/Icon.jsx';
import css from './Calendar.module.css';

export const Calendar = ({ data = [], today }) => {
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
          <CalendarPagination today={today} />
          <Icon iconName="pie-chart" width="20" height="20" />
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
};
