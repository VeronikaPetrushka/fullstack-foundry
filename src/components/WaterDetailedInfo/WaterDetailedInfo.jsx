import css from './WaterDetailedInfo.module.css';
import UserBar from '../UserBar/UserBar';
import UserPanel from '../UserPanel/UserPanel';
import UserBarPopover from '../UserBarPopover/UserBarPopover';

const WaterDetailedInfo = () => {
  return (
    <div className={css.waterDetailedInfoWrapper}>
      <UserBar />
      <UserPanel />
      <UserBarPopover />
    </div>
  );
};

export default WaterDetailedInfo;
