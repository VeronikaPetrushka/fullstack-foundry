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

const Calendar = ({selectedDate, handleClick}) => {

  const today = getDateObject();

  const [selectedMonth, setselectedMonth] = useState(today);

  const [monthDate, setMonthDate] = useState(null);

  const dispatch = useDispatch();

  const monthData = useSelector(selectWaterMonthly);

  const user = useSelector(selectUserInfo);

  const minDay = getDateObject(user.createdAt);

  const handlePrevMonth = () => {
    if (selectedMonth.month === 1) {
      setselectedMonth({
        ...selectedMonth,
        year: selectedMonth.year - 1,
        month: 12,
      });
    } else {
      setselectedMonth({ ...selectedMonth, month: selectedMonth.month - 1 });
    }
  };
  const handleNextMonth = () => {
    if (selectedMonth.month === 12) {
      setselectedMonth({
        ...selectedMonth,
        year: selectedMonth.year + 1,
        month: 1,
      });
    } else {
      setselectedMonth({ ...selectedMonth, month: selectedMonth.month + 1 });
    }
  };

  useEffect(() => {
    const waterMonthStart = `${selectedMonth.year}-${selectedMonth.month
      .toString()
      .padStart(2, '0')}-01`;
    const waterMonthEnd = `${selectedMonth.year}-${selectedMonth.month
      .toString()
      .padStart(2, '0')}-${selectedMonth.dayInMonth
      .toString()
      .padStart(2, '0')}`;
    setMonthDate({ startDate: waterMonthStart, endDate: waterMonthEnd });
  }, [selectedMonth]);

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
            selectedMonth={selectedMonth}
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
            <CalendarItem key={day.fullDate} selectedDate={selectedDate} day={day} today={today} handleClick={handleClick} />
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
