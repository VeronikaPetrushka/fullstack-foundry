import css from './UserBarPopover.module.css'
import { useState } from 'react';
import Icon from "../Icon/Icon";
import UserSettingsModal from '../UserSettingsModal/UserSettingsModal';
import { LogOutModal } from '../LogOutModal/LogOutModal';

const UserBarPopover = () => {
    const [activeModal, setActiveModal] = useState(null);

    const handleButtonClick = (modalName) => {
        setActiveModal(modalName);
    };

    const closeModal = () => {
        setActiveModal(null);
    };

    return (
        <div className={css.popoverBtnWrapper}>
            <button
                type="button"
                className={`${css.popoverBtn} ${activeModal === 'settings' ? css.isActive : ''}`}
                onClick={() => handleButtonClick('settings')}
            >
                <Icon iconName="settings" width='18' height='18' styles={css.popoverIcon} />
                Settings
            </button>
            <button
                type="button"
                className={`${css.popoverBtn} ${activeModal === 'log-out' ? css.isActive : ''}`}
                onClick={() => handleButtonClick('log-out')}
            >
                <Icon iconName="log-out" width='18' height='18' styles={css.popoverIcon} />
                Log out
            </button>

            {activeModal === 'settings' && <UserSettingsModal onClose={closeModal} />}
            {activeModal === 'log-out' && <LogOutModal onClose={closeModal} />}
        </div>
    );
}

export default UserBarPopover;