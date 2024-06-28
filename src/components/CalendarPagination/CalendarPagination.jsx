import PropTypes from 'prop-types';
import Icon from '../Icon/Icon.jsx';
import css from './CalendarPagination.module.css';

const CalendarPagination = ({
  today,
  minDay,
  selectedMonth,
  handlePrevMonth,
  handleNextMonth,
}) => {

  const showPrevMonth =
  selectedMonth.month === minDay.month && selectedMonth.year === minDay.year
      ? true
      : false;
  const showNextMonth =
    selectedMonth.month === today.month && selectedMonth.year === today.year
      ? true
      : false;

  return (
    <div className={css.calendarPaginator}>
      <button
        type="button"
        className={css.calendarPageBtn}
        onClick={handlePrevMonth}
        disabled={showPrevMonth}
      >
        <Icon
          iconName="arr-left"
          width="18"
          height="18"
          styles={css.calendarArrow}
        />
      </button>
      <div className={css.calendarMonth}>
        {selectedMonth.monthName} {selectedMonth.year}
      </div>
      <button
        type="button"
        className={css.calendarPageBtn}
        onClick={handleNextMonth}
        disabled={showNextMonth}
      >
        <Icon
          iconName="arr-right"
          width="18"
          height="18"
          styles={css.calendarArrow}
        />
      </button>
    </div>
  );
};

export default CalendarPagination;

CalendarPagination.propTypes = {
  today: PropTypes.object,
  minDay: PropTypes.object,
  selectedMonth: PropTypes.object,
  handlePrevMonth: PropTypes.func,
  handleNextMonth: PropTypes.func,
};
