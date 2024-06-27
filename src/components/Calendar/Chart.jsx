import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { weekActivity } from '../../redux/water/operations';
import getSevenDayRange from '../../helpers/getSevenDaysRange';

const Chart = ({ selectedDate }) => {
  const dispatch = useDispatch();
  const [weekDate, setWeekDate] = useState(null);

  useEffect(() => {
    setWeekDate(getSevenDayRange(selectedDate));
  }, [selectedDate]);

  useEffect(() => {
    if (weekDate) {
      dispatch(weekActivity(weekDate));
    }
  }, [dispatch, weekDate]);

  return <div>Chart</div>;
};

export default Chart;
