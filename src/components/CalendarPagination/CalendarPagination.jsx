import PropTypes from 'prop-types';
import * as M from '../../constants/month.js';

import Icon from '../Icon/Icon.jsx';
import css from './CalendarPagination.module.css';

const CalendarPagination = ({
  today,
  minDay,
  selectedDate,
  handlePrevMonth,
  handleNextMonth,
}) => {
  const showPrevMonth =
    minDay.month === minDay.month && selectedDate.year === minDay.year
      ? true
      : false;
  const showNextMonth =
    selectedDate.month === today.month && selectedDate.year === today.year
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
        {M.months_en[selectedDate.month]} {selectedDate.year}
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
  selectedDate: PropTypes.object,
  handlePrevMonth: PropTypes.func,
  handleNextMonth: PropTypes.func,
};
