import Icon from '../Icon/Icon.jsx';
import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { monthActivity } from '../../redux/water/operations.js';
import css from './WaterProgressBar.module.css';
import { getDateObject } from '../../helpers/dateHelpers.js';
import { selectWaterMonthly } from '../../redux/water/selectors.js';

const WaterProgressBar = ({ selectedDate }) => {
  const { day, month_name, fullDate } = selectedDate;

  const currentDate = useMemo(
    () => ({
      startDate: fullDate,
      endDate: fullDate,
    }),
    [fullDate]
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (currentDate) {
      dispatch(monthActivity(currentDate));
    }
  }, [dispatch, currentDate]);

  const dayWater = useSelector(selectWaterMonthly);
  const percentage = dayWater.length > 0 ? dayWater[0].percentageOfNorma : 0;
  const today = getDateObject();

  return (
    <div className={css.progressBarContainer}>
      <div className={css.nameBar}>
        {fullDate === today.fullDate ? (
          <div>Today</div>
        ) : (
          <div>{`${day}, ${month_name}`}</div>
        )}
      </div>
      <div className={css.percentDynamicContainer}>
        <div
          className={css.percentDynamic}
          style={{
            left: percentage < 20 ? `${percentage - 2}%` : `${percentage - 4}%`,
          }}
        >
          {`${percentage}%`}
        </div>
      </div>
      <div className={css.progressBar}>
        <div className={css.progress} style={{ width: `${percentage}%` }}>
          <Icon
            iconName="circle"
            width="12"
            height="12"
            styles={css.circle}
            style={{ left: `${percentage}%` }}
          />
        </div>
      </div>
      <div className={css.percentContainer}>
        <span>0%</span>
        <span className={css.percent50}>50%</span>
        <span>100%</span>
      </div>
    </div>
  );
};
export default WaterProgressBar;
