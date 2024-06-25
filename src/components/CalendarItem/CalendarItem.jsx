import PropTypes from 'prop-types';
import css from './CalendarItem.module.css';

let dayClass;

const CalendarItem = ({ day, today, handleClick }) => {
  if (day.percentageOfNorma < 100) {
    dayClass = css.part;
  } else if (day.day === today.day) {
    dayClass = css.current;
  } else {
    dayClass = css.full;
  }
  const classNames = [css.btnDay, dayClass];
  const activeBtn = day.percentageOfNorma > 0 ? false : true;

  return (
    <button type="button" className={css.calendarBtn} disabled={activeBtn} onClick={() => {handleClick(day.date)}}>
      <span className={classNames.join(' ')}>{day.day}</span>
      <span className={css.btnProcent}>
        {day.percentageOfNorma === 0 ? '' : day.percentageOfNorma + '%'}
      </span>
    </button>
  );
};

export default CalendarItem;

CalendarItem.propTypes = {
  day: PropTypes.object.isRequired,
  today: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};
