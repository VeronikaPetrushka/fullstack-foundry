import CalendarPagination from '../CalendarPagination/CalendarPagination';
import CalendarItem from '../CalendarItem/CalendarItem';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userInfo } from '../../redux/user/operations';


import Icon from '../Icon/Icon.jsx';
import css from './Calendar.module.css';

 const Calendar = () => {

  // test for token refreshing
  const dispatch = useDispatch();
  dispatch(userInfo());

  function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  const testData = [
    { day: 1, procent: 100 },
    { day: 2, procent: 100 },
    { day: 3, procent: 100 },
    { day: 4, procent: 65 },
    { day: 5, procent: 100 },
    { day: 6, procent: 100 },
    { day: 7, procent: 100 },
    { day: 8, procent: 100 },
    { day: 9, procent: 100 },
    { day: 10, procent: 90 },
    { day: 11, procent: 100 },
    { day: 12, procent: 100 },
    { day: 13, procent: 100 },
    { day: 14, procent: 80 },
    { day: 15, procent: 100 },
    { day: 16, procent: 100 },
    { day: 17, procent: 100 },
    { day: 18, procent: 100 },
    { day: 19, procent: 100 },
    { day: 20, procent: 100 },
    { day: 21, procent: 95 },
    { day: 22, procent: 100 },
    { day: 23, procent: 100 },
    { day: 24, procent: 100 },
    { day: 25, procent: 100 },
    { day: 26, procent: 100 },
    { day: 27, procent: 100 },
  ];

    const currentDate = new Date();
    const today = {
      day: currentDate.getDate(),
      month: currentDate.getMonth() + 1,
      year: currentDate.getFullYear(),
      dayInMonth: daysInMonth(currentDate.getMonth() + 1, currentDate.getFullYear()),
    }

    const [selectedDate, setSelectedDate] = useState(today);
    const [data, setData] = useState(testData);

    const handlePrevMonth = () => {
      if (selectedDate.month === 1) {
        setSelectedDate({ ...selectedDate, year: selectedDate.year - 1, month: 12 });
      } else {
        setSelectedDate({ ...selectedDate, month: selectedDate.month - 1 });
      }
    }
    const handleNextMonth = () => {
      if (selectedDate.month === 12) {
        setSelectedDate({ ...selectedDate, year: selectedDate.year + 1, month: 1 });
      } else {
        setSelectedDate({ ...selectedDate, month: selectedDate.month + 1 });
      }
    }

    useEffect(() => {
      //request to API /water/month
    }, [selectedDate]);


  const days = [];
  for (let i = 1; i <= today.dayInMonth; i++) {
    let record = data.find(day => day.day === i);
    let procent = 0;
    if (record) {
      procent = record.procent;
    }
    days[i] = { day: i, procent };
  }

  return (
    <div className={css.calendar}>
      <div className={css.calendarHead}>
        <div className={css.calendarTitle}>Month</div>
        <div className={css.calendarSwitcher}>
          <CalendarPagination today={today} selectedDate={selectedDate} handleNextMonth={handleNextMonth} handlePrevMonth={handlePrevMonth} />
          <button type='button' className={css.calendarTypeBtn}>
          <Icon iconName="pie-chart" width='18' height='18' styles={css.calendarTypeIcon} />
          </button>
        </div>
      </div>
      <div className={css.calendarBody}>
        {days.map(day => (
          <div className={css.calendarItem} key={day.day}>
            <CalendarItem day={day} today={today} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
