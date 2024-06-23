import PropTypes from 'prop-types';
import * as M from '../../constants/month.js';
import Icon from '../Icon/Icon.jsx'
import css from './CalendarPagination.module.css';

export const CalendarPagination = ({today, selectedDate, handlePrevMonth, handleNextMonth}) => {

  const showNextMonth = selectedDate.month === today.month && selectedDate.year === today.year ? true : false;
  return (
    <div className={css.calendarPaginator}>
      <button type='button' className={css.calendarPageBtn}  onClick={handlePrevMonth}>
      <Icon iconName="arr-left" width='18' height='18' styles={css.calendarArrow} />
      </button>
      <div className={css.calendarMonth}>{M.months_en[selectedDate.month]} {selectedDate.year}</div>
      <button type='button' className={css.calendarPageBtn}  onClick={handleNextMonth} disabled={showNextMonth}>
      <Icon iconName="arr-right" width='18' height='18' styles={css.calendarArrow} />
      </button>
      </div>
  )
}

CalendarPagination.propTypes = {
  today: PropTypes.object,
  selectedDate: PropTypes.object,
  handlePrevMonth: PropTypes.func,
  handleNextMonth: PropTypes.func
}
