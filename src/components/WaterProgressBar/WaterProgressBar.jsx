import Icon from '../Icon/Icon.jsx';
import css from './WaterProgressBar.module.css';
import { getDateObject } from '../../helpers/dateHelpers.js';

const WaterProgressBar = ({ selectedDate }) => {
  const currentDay = selectedDate.fullDate;
  const today = getDateObject();

  const percentage = 35;
  return (
    <div className={css.progressBarContainer}>
      <div className={css.nameBar}>
        {currentDay === today.fullDate ? (
          <div>Today</div>
        ) : (
          <div>{`${selectedDate.day}, ${selectedDate.month_name}`}</div>
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
