import css from './UserBarPopover.module.css';
import { useState } from 'react';
import Icon from '../Icon/Icon';
import UserSettingsModal from '../UserSettingsModal/UserSettingsModal';
import { LogOutModal } from '../LogOutModal/LogOutModal';
import { BasicModal } from '../BasicModal/BasicModal';
import { useTranslation } from 'react-i18next';


const UserBarPopover = ({ isOpen }) => {
  const [activeModal, setActiveModal] = useState(null);

  const handleButtonClick = modalName => {
    setActiveModal(modalName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const { t } = useTranslation();

  return (
    <div className={`${css.popoverBtnWrapper} ${isOpen ? css.isOpen : ''}`}>
      <button
        type="button"
        className={`${css.popoverBtn} ${
          activeModal === 'settings' ? css.isActive : ''
        }`}
        onClick={() => handleButtonClick('settings')}
      >
        <Icon
          iconName="settings"
          width="18"
          height="18"
          styles={css.popoverIcon}
        />
        {t('settings')}
      </button>
      <button
        type="button"
        className={`${css.popoverBtn} ${
          activeModal === 'log-out' ? css.isActive : ''
        }`}
        onClick={() => handleButtonClick('log-out')}
      >
        <Icon
          iconName="log-out"
          width="18"
          height="18"
          styles={css.popoverIcon}
        />
        {t('logout')}
      </button>

      {activeModal === 'settings' && (
        <BasicModal isOpen onClose={closeModal}>
          <UserSettingsModal onClose={closeModal} />
        </BasicModal>
      )}
      {activeModal === 'log-out' && (
        <BasicModal isOpen onClose={closeModal}>
          <LogOutModal onClose={closeModal} />
        </BasicModal>
      )}
    </div>
  );
};

export default UserBarPopover;
