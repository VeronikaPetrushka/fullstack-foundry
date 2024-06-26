import PropTypes from 'prop-types';
import css from './CalendarItem.module.css';

let dayClass;

const CalendarItem = ({ selectedDate, day, today, handleClick }) => {

  if (day.percentageOfNorma < 100) {
    dayClass = css.part;
  }else{
    dayClass = css.full;
  }
  if (day.date === today.fullDate+"T00:00:00.000Z" || day.date === selectedDate.fullDate+"T00:00:00.000Z") {
    dayClass = css.current;
  }

  const activeBtn = day.percentageOfNorma > 0 ? false : true;

  return (
    <button type="button" className={css.calendarBtn} disabled={activeBtn} onClick={() => {handleClick(day.date)}}>
      <span className={[css.btnDay, dayClass].join(' ')}>{day.day}</span>
      <span className={css.btnProcent}>
        {day.percentageOfNorma === 0 ? '' : day.percentageOfNorma + '%'}
      </span>
    </button>
  );
};

export default CalendarItem;

CalendarItem.propTypes = {
  selectedDate: PropTypes.object,
  selectedMonth: PropTypes.object,
  day: PropTypes.object.isRequired,
  today: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};
