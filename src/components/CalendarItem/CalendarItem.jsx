import css from './CalendarItem.module.css';

let dayClass;

export const CalendarItem = ({ day, today }) => {

  if(day.procent < 100) {
    dayClass = css.part;
  }else if(day.day === today.day) {
    dayClass = css.current;
  }else{
    dayClass = css.full;
  }
  const classNames = [css.btnDay, dayClass];

  return (
    <button type="button" className={css.calendarBtn}>
      <span className={classNames.join(' ')}>{day.day}</span>
      <span className={css.btnProcent}>{day.procent}%</span>
    </button>
  );
};


