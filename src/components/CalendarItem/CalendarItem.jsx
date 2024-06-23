import css from './CalendarItem.module.css';

export const CalendarItem = ({ day }) => {
  console.log(day);
  return (
    <button type="button" className={css.calendarBtn}>
      <span className={css.btnDay}>{day.day}</span>
      <span className={css.btnProcent}>{day.procent}%</span>
    </button>
  );
};
