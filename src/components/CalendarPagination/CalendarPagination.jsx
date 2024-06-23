import PropTypes from 'prop-types';
import * as M from '../../constants/month.js';
import Icon from '../Icon/Icon.jsx'
import css from './CalendarPagination.module.css';

export const CalendarPagination = ({today}) => {
  return (
    <div className={css.calendarPaginator}>
      <button type='button' className={css.calendarPageBtn}>
      <Icon iconName="arr-left" width='18' height='18' styles={css.calendarArrow} />
      </button>
      <div className={css.calendarMonth}>{M.months_en[today.month]} {today.year}</div>
      <button type='button' className={css.calendarPageBtn}>
      <Icon iconName="arr-right" width='18' height='18' styles={css.calendarArrow} />
      </button>
      </div>
  )
}

CalendarPagination.propTypes = {
  today: PropTypes.object
}
