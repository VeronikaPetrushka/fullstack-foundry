import css from './WaterDetailedInfo.module.css';
import UserBar from '../UserBar/UserBar';
import UserPanel from '../UserPanel/UserPanel';

const WaterDetailedInfo = () => {
  return (
    <div className={css.waterDetailedInfoWrapper}>
      <UserPanel />
      <UserBar />
    </div>
  );
};

export default WaterDetailedInfo;
