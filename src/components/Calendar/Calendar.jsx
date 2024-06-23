import CalendarPagination from '../CalendarPagination/CalendarPagination';
import CalendarItem from '../CalendarPagination/CalendarItem';

const Calendar = () => {
  const currentDate = new Date();
  const monthNumber = currentDate.getMonth();
  const monthDay = currentDate.getDay();

  const data = [
    { day: 1, procent: 100 },
    { day: 2, procent: 100 },
    { day: 3, procent: 100 },
    { day: 4, procent: 100 },
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
    { day: 28, procent: 100 },
    { day: 29, procent: 100 },
    { day: 30, procent: 100 },
  ];

  return (
    <div className="calendar">
      <div className="calendar-head">
        <div className="calendar-title">Month</div>
        <div>
          <CalendarPagination />
        </div>
      </div>
      <div className="calendar-body">
        {data.map(day => (
          <div className="calendar-item" key={day.day}>
            <CalendarItem day={day} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
