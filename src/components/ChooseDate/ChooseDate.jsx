import s from './ChooseDate.module.css';
import { getDateObject } from '../../helpers/dateHelpers';

const ChooseDate = ({ selectedDate }) => {
    const { day, month_name } = selectedDate;

  return (
    <div className={s.div}>
      <h3 className={s.selectedDate}>{selectedDate.fullDate === getDateObject().fullDate ? "Today" : `${day}, ${month_name}`}</h3>
    </div>
  );
};

export default ChooseDate;