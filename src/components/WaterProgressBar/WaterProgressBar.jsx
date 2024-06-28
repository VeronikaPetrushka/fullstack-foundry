import Icon from '../Icon/Icon.jsx';
import { useSelector } from 'react-redux';
import css from './WaterProgressBar.module.css';
import { getDateObject } from '../../helpers/dateHelpers.js';
import { selectWaterDaily } from '../../redux/water/selectors.js';
import { selectUserInfo } from '../../redux/user/selectors.js';

const WaterProgressBar = ({ selectedDate }) => {
  const { day, month_name, fullDate } = selectedDate;

  const dayWater = useSelector(selectWaterDaily);
  const { dailyNorma } = useSelector(selectUserInfo);

  const totalAmount = dayWater.reduce((total, record) => total + record.amount, 0);
  const percentage = totalAmount > dailyNorma ? 100 : (totalAmount / dailyNorma * 100).toFixed(0);

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
