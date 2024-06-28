import PropTypes from 'prop-types';
import CalendarItem from '../CalendarItem/CalendarItem';
import css from './Calendar.module.css';


// import { useDispatch } from 'react-redux';
// import {addWater, deleteWater} from '../../redux/water/operations';

const Calendar = ({
  daysOfSelectedMonth,
  selectedDate,
  minDay,
  today,
  handleClick,
}) => {

//   const dispatch = useDispatch();
//   const handleAddWater = async () => {
//     const data = {
//       "amount": 230,
//       "date": selectedDate.fullDate+"T10:30"
//     }
//     await dispatch(addWater(data));
// }

// const handleEditWater = async () => {
//   const id = "667e738ddd629e109a93647f";
//   const data = {
//     "amount": 370,
//     "date": selectedDate.fullDate+"T13:30"
//   }
//   await dispatch(addWater(data));
// }

//   const handleDeleteWater = async () => {
//     const data = {
//       "id": "667e7354dd629e109a93646e"
//     }
//     await dispatch(deleteWater(data));
// }


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

      {/* <div style={{position: 'absolute', right: '0px', bottom: '-20px'}}>
      <button onClick={handleAddWater}>Add water</button>
      <button onClick={handleEditWater}>Edit water</button>
      <button onClick={handleDeleteWater}>Delete water</button>
      </div> */}

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
