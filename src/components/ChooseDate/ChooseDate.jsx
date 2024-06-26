import { useMemo } from 'react';
import s from './ChooseDate.module.css';

const ChooseDate = ({ selectedDate }) => {
    const { day, month_name } = selectedDate;
  
    const currentDate = useMemo(() => {
      const currentDate = new Date()
      const day = currentDate.getUTCDate()
      const month = currentDate.toLocaleString("en", { month: "long" })
  
      return `${day}, ${month}`
    }, [])

  return (
    <div className={s.div}>
      <h3 className={s.selectedDate}>{currentDate ? "Today" : `${day}, ${month_name}`}</h3>
    </div>
  );
};

export default ChooseDate;