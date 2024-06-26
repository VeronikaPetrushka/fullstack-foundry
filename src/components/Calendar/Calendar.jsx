import PropTypes from 'prop-types';
import CalendarPagination from '../CalendarPagination/CalendarPagination';
import CalendarItem from '../CalendarItem/CalendarItem';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { monthActivity } from '../../redux/water/operations';
import { selectWaterMonthly, selectIsError, selectIsLoading } from '../../redux/water/selectors';
import { getDateObject } from '../../helpers/dateHelpers';
import { selectUserInfo } from '../../redux/user/selectors';
import Chart  from './Chart';

import Icon from '../Icon/Icon.jsx';
import css from './Calendar.module.css';

const Calendar = ({selectedDate, handleClick}) => {

  const today = getDateObject();

  const isLoadingWaterMonth = useSelector(selectIsLoading);
  const isErrorWaterMonth = useSelector(selectIsError);



  const [selectedMonth, setSelectedMonth] = useState(today);

  const [showChart, setShowChart] = useState(false);

  const [monthDate, setMonthDate] = useState(null);

  const dispatch = useDispatch();

  const dataForSelectedMonth = useSelector(selectWaterMonthly);

  const user = useSelector(selectUserInfo);

  const minDay = getDateObject(user.createdAt);

  const handleShowChart = () => {
    setShowChart(prevState => !prevState);
  }

  const handlePrevMonth = () => {
    setSelectedMonth(prevSelectedMonth => {
      let newSelectedMonth;
      if (prevSelectedMonth.month === 1) {
        newSelectedMonth = `${prevSelectedMonth.year - 1}-12-${prevSelectedMonth.day}`;
      } else {
        newSelectedMonth = `${prevSelectedMonth.year}-${prevSelectedMonth.month - 1}-${prevSelectedMonth.day}`;
      }

      return getDateObject(newSelectedMonth);
    });
  };
  const handleNextMonth = () => {
    setSelectedMonth(prevSelectedMonth => {
      let newSelectedMonth;
      if (selectedMonth.month === 12) {
        newSelectedMonth = `${prevSelectedMonth.year + 1}-01-${prevSelectedMonth.day}`;
      }else{
        newSelectedMonth = `${prevSelectedMonth.year}-${prevSelectedMonth.month + 1}-${prevSelectedMonth.day}`;
      }
      return getDateObject(newSelectedMonth);
    })
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

  const daysOfSelectedMonth = [];
  for (let i = 1; i <= today.dayInMonth; i++) {
    daysOfSelectedMonth[i] = {
      day: i,
      percentageOfNorma: 0,
      totalAmount: 0,
      date: '',
      fullDate: `${selectedMonth.year}-${selectedMonth.month.toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}`
    };
  }
  for (const day of dataForSelectedMonth) {
    let dayNumber = new Date(day.date).getDate();
    daysOfSelectedMonth[dayNumber] = {...daysOfSelectedMonth[dayNumber], ...day};
    if(day.percentageOfNorma > 100) daysOfSelectedMonth[dayNumber].percentageOfNorma = 100;
    else daysOfSelectedMonth[dayNumber].percentageOfNorma = Number(day.percentageOfNorma.toFixed(0));
  }

  return isErrorWaterMonth ? (<div>Error occured! Rsresh page and try again.</div>) :
  isLoadingWaterMonth ? (<div>Loading data...</div>) :
  (
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
          <button type="button" className={css.calendarTypeBtn} onClick={handleShowChart}>
            <Icon
              iconName="pie-chart"
              width="18"
              height="18"
              styles={css.calendarTypeIcon}
            />
          </button>
        </div>
      </div>
      {showChart ?
        <Chart dataForSelectedMonth={dataForSelectedMonth} />
        :
        <div className={css.calendarBody}>
          {daysOfSelectedMonth.map(day => (
            <div className={css.calendarItem} key={day.day}>
              <CalendarItem key={day.fullDate} selectedDate={selectedDate} dayOfMonth={day} minDay={minDay} today={today} handleClick={handleClick} />
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default Calendar;

Calendar.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
