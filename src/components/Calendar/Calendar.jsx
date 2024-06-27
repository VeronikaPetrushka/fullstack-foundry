import PropTypes from 'prop-types';
import CalendarItem from '../CalendarItem/CalendarItem';
import css from './Calendar.module.css';


import { useDispatch } from 'react-redux';
import {addWater, deleteWater} from '../../redux/water/operations';

const Calendar = ({
  daysOfSelectedMonth,
  selectedDate,
  minDay,
  today,
  handleClick,
}) => {


  const dispatch = useDispatch();
  const handleAddWater = async () => {
    const data = {
      "amount": 150,
      "date": "2024-06-27T11:30"
    }
    const res = await dispatch(addWater(data));
    console.log(res);
}

  const handleDeleteWater = async () => {
    const data = {
      "id": "667d8cc5b09b9391fee4618f"
    }
    const res = await dispatch(deleteWater(data));
    console.log(res);
}


  return (
    <div className={css.calendarBody}>
      {daysOfSelectedMonth.map(day => (
        <div className={css.calendarItem} key={day.day}>
          <CalendarItem
            key={day.fullDate}
            selectedDate={selectedDate}
            dayOfMonth={day}
            minDay={minDay}
            today={today}
            handleClick={handleClick}
          />
        </div>
      ))}


      <button onClick={handleAddWater}>Add water</button>
      <button onClick={handleDeleteWater}>Delete water</button>

    </div>
  );
};

export default Calendar;

Calendar.propTypes = {
  daysOfSelectedMonth: PropTypes.array.isRequired,
  selectedDate: PropTypes.object.isRequired,
  minDay: PropTypes.object.isRequired,
  today: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};
