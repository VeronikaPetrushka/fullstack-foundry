import css from './UserBar.module.css'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import UserBarPopover from "../UserBarPopover/UserBarPopover";
import { selectUserName, selectAvatar } from '../../redux/user/selectors';
import Icon from '../Icon/Icon';

const UserBar = () => {
    const [isPopoverActive, setIsPopoverActive] = useState(false);
    const userName = useSelector(selectUserName);
    const avatar = useSelector(selectAvatar);

    const handleButtonClick = () => {
        setIsPopoverActive(prevState => !prevState);
    };

    return (
        <div className={css.userBarWrapper}>
            <div className={css.userBarMainWrapper}>
                <p className={css.userName}>{userName || 'You'}</p>
                <div className={css.avatarBox}>
                    <img src={avatar || 'src/assets/img/avatar-default.jpg'} className={avatar ? css.avatarImg : css.avatarImgdefault} />
                </div>
                <button
                    type="button"
                    className={`${css.popoverBtn} ${isPopoverActive ? css.isActive : ''}`}
                    onClick={handleButtonClick}
                >
                    <Icon iconName="arr-up" width='18' height='18' styles={css.arrUpIcon} />
                </button>
            </div>
            {isPopoverActive && <UserBarPopover />}
        </div>
    );
};


export default UserBar;