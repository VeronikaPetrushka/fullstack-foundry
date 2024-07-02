import css from './UserBar.module.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import UserBarPopover from '../UserBarPopover/UserBarPopover';
import { selectUserInfo } from '../../redux/user/selectors';
import Icon from '../Icon/Icon';

const UserBar = () => {
  const [isPopoverActive, setIsPopoverActive] = useState(false);
  const user = useSelector(selectUserInfo);

  const handleButtonClick = () => {
    setIsPopoverActive(prevState => !prevState);
  };

  const getUserName = () => {
    if(user.name === "" || !user.name){
      const emailParts = String(user.email).split('@');
      return emailParts[0];
    }
    return user.name;
  };

  return (
    <div className={css.userBarWrapper}>
      <div className={css.userBarMainWrapper}>
        <p className={css.userName}>{getUserName()}</p>
        <div className={css.avatarBox}>
          <img
            src={user.avatar || 'src/assets/img/avatar-default.jpg'}
            className={user.avatar ? css.avatarImg : css.avatarImgdefault}
          />
        </div>
        <button
          type="button"
          className={`${css.popoverBtn} ${isPopoverActive ? css.isActive : ''}`}
          onClick={handleButtonClick}
        >
          <Icon
            iconName="arr-up"
            width="18"
            height="18"
            styles={css.arrUpIcon}
          />
        </button>
      </div>
      <UserBarPopover isOpen={isPopoverActive} />
    </div>
  );
};

export default UserBar;
