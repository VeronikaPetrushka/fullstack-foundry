import { CalendarPagination } from '../CalendarPagination/CalendarPagination';
import { CalendarItem } from '../CalendarItem/CalendarItem';
import css from './Calendar.module.css'

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

export const Calendar = ({data = [], currentMonth, currentDay, currentYear}) => {

  return (
    <div className={css.calendar}>
      <div className={css.calendarHead}>
        <div className={css.calendarTitle}>Month</div>
        <div className={css.calendarPagination}>
          <CalendarPagination />
        </div>
      </div>
      <div className={css.calendarBody}>
        {data.map(day => (
          <div className={css.calendarItem} key={day.day}>
            <CalendarItem day={day} />
          </div>
        ))}
      </div>
    </div>
  );
};
