import PropTypes from 'prop-types';
import css from './CalendarItem.module.css';
import { dateIsBetween, dateIsEqual } from '../../helpers/dateHelpers';

let dayClass;

const CalendarItem = ({ selectedDate, dayOfMonth, minDay, today, handleClick }) => {

  if (dayOfMonth.percentageOfNorma < 100) {
    dayClass = css.part;
  }else{
    dayClass = css.full;
  }

  if (dateIsEqual(dayOfMonth.fullDate, selectedDate.fullDate)) {
    dayClass = css.selected;
  }
  if (dateIsEqual(dayOfMonth.fullDate, today.fullDate)) {
    dayClass = css.current;
  }

  const activeBtn = dateIsBetween(dayOfMonth.fullDate, minDay.fullDate, today.fullDate) ? true : false;

  return (
    <button type="button" className={css.calendarBtn} disabled={!activeBtn} onClick={() => {handleClick(dayOfMonth.fullDate)}}>
      <span className={[css.btnDay, dayClass].join(' ')}>{dayOfMonth.day}</span>
      <span className={css.btnProcent}>
        {dayOfMonth.percentageOfNorma === 0 ? '' : dayOfMonth.percentageOfNorma + '%'}
      </span>
    </button>
  );
};

export default CalendarItem;

CalendarItem.propTypes = {
  minDay: PropTypes.object,
  selectedDate: PropTypes.object,
  selectedMonth: PropTypes.object,
  dayOfMonth: PropTypes.object.isRequired,
  today: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};
