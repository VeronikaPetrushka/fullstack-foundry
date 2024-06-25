import PropTypes from 'prop-types';
import CalendarPagination from '../CalendarPagination/CalendarPagination';
import CalendarItem from '../CalendarItem/CalendarItem';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { monthActivity } from '../../redux/water/operations';
import { selectWaterMonthly } from '../../redux/water/selectors';
import { getDateObject } from '../../helpers/dateHelpers';
import { selectUserInfo } from '../../redux/user/selectors';

import Icon from '../Icon/Icon.jsx';
import css from './Calendar.module.css';

const Calendar = ({handleClick}) => {
  const today = getDateObject();

  const [selectedDate, setSelectedDate] = useState(today);

  const [monthDate, setMonthDate] = useState(null);

  const dispatch = useDispatch();

  const monthData = useSelector(selectWaterMonthly);

  const user = useSelector(selectUserInfo);

  const minDay = getDateObject(user.createdAt);

  const handlePrevMonth = () => {
    if (selectedDate.month === 1) {
      setSelectedDate({
        ...selectedDate,
        year: selectedDate.year - 1,
        month: 12,
      });
    } else {
      setSelectedDate({ ...selectedDate, month: selectedDate.month - 1 });
    }
  };
  const handleNextMonth = () => {
    if (selectedDate.month === 12) {
      setSelectedDate({
        ...selectedDate,
        year: selectedDate.year + 1,
        month: 1,
      });
    } else {
      setSelectedDate({ ...selectedDate, month: selectedDate.month + 1 });
    }
  };

  useEffect(() => {
    const waterMonthStart = `${selectedDate.year}-${selectedDate.month
      .toString()
      .padStart(2, '0')}-01`;
    const waterMonthEnd = `${selectedDate.year}-${selectedDate.month
      .toString()
      .padStart(2, '0')}-${selectedDate.dayInMonth
      .toString()
      .padStart(2, '0')}`;
    setMonthDate({ startDate: waterMonthStart, endDate: waterMonthEnd });
  }, [selectedDate]);

  useEffect(() => {
    if (monthDate) {
      dispatch(monthActivity(monthDate));
    }
  }, [dispatch, monthDate]);

  const days = [];
  for (let i = 1; i <= today.dayInMonth; i++) {
    days[i] = { day: i, percentageOfNorma: 0, totalAmount: 0, date: '' };
  }
  for (const day of monthData) {
    let dayNumber = new Date(day.date).getDate();
    day.percentageOfNorma > 100 ? (day.percentageOfNorma = 100) : day.percentageOfNorma;
    days[dayNumber] = {...days[dayNumber], ...day};
  }

  return (
    <div className={css.calendar}>
      <div className={css.calendarHead}>
        <div className={css.calendarTitle}>Month</div>
        <div className={css.calendarSwitcher}>
          <CalendarPagination
            today={today}
            minDay={minDay}
            selectedDate={selectedDate}
            handleNextMonth={handleNextMonth}
            handlePrevMonth={handlePrevMonth}
          />
          <button type="button" className={css.calendarTypeBtn}>
            <Icon
              iconName="pie-chart"
              width="18"
              height="18"
              styles={css.calendarTypeIcon}
            />
          </button>
        </div>
      </div>
      <div className={css.calendarBody}>
        {days.map(day => (
          <div className={css.calendarItem} key={day.day}>
            <CalendarItem day={day} today={today} handleClick={handleClick} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;

Calendar.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
