import Icon from '../Icon/Icon.jsx';
import css from './WaterProgressBar.module.css';

const WaterProgressBar = () => {
  return (
    <div className={css.progressBarContainer}>
      <div>
        <div className={css.nameBar}>Today</div>
      </div>
      <div className={css.progressBar}>
        <div className={css.progress} style={{ width: `40%` }}>
          <Icon
            iconName="circle"
            width="12"
            height="12"
            styles={css.circle}
            style={{ left: `40% ` }}
          />
        </div>
      </div>
      <div className={css.percentContainer}>
        <span className={css.percentNumber}>0%</span>
        <span className={css.percentNumber}>50%</span>
        <span className={css.percentNumber}>100%</span>
      </div>
    </div>
  );
};
export default WaterProgressBar;
