import { CalendarPagination } from '../CalendarPagination/CalendarPagination';
import { CalendarItem } from '../CalendarItem/CalendarItem';
import css from './Calendar.module.css'

export const Calendar = ({data = [], today}) => {

  return (
    <div className={css.calendar}>
      <div className={css.calendarHead}>
        <div className={css.calendarTitle}>Month</div>
        <div className={css.calendarPagination}>
          <CalendarPagination />
        </div>
      </div>
      <div className={css.calendarBody}>
        {
          for(let i = 1; i < today.dayInMonth; i++){
            <div className={css.calendarItem} key={day.day}>
              <CalendarItem day={{day: i, procent: 0}} today={today} />
            </div>
          }
        }
        {/* {data.map(day => (
          <div className={css.calendarItem} key={day.day}>
            <CalendarItem day={day} today={today} />
          </div>
        ))} */}
      </div>
    </div>
  );
};
