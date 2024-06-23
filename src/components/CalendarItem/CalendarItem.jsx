import PropTypes from 'prop-types';
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
  const activeBtn = day.day > 0 ? false : true;

  return (
    <button type="button" className={css.calendarBtn} disabled={activeBtn}>
      <span className={classNames.join(' ')}>{day.day}</span>
      <span className={css.btnProcent}>{day.procent === 0 ? "" : day.procent+"%"}</span>
    </button>
  );
};

CalendarItem.propTypes = {
  day: PropTypes.object.isRequired,
  today: PropTypes.object.isRequired,
}
