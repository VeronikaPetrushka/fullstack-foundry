import { useSelector } from 'react-redux';
import css from './UserSettingsModal.module.css';
import UserSettingsForm from '../UserSettingsForm/UserSettingsForm';
import { selectUserInfo } from '../../redux/user/selectors';
import Icon from '../Icon/Icon';

export default function UserSettingsModal({ onClose, isOpen }) {
  const user = useSelector(selectUserInfo);

  return (
    <div className={`${css.modalBox} ${isOpen ? css.open : ''}`}>
      <button type="button" className={css.close} onClick={() => onClose()}>
        <Icon width="28" height="28" iconName="close" styles="icon-close" />
      </button>
      <h2 className={css.title}>Settings</h2>
      <div className={css.settingBox}>
        <UserSettingsForm closeModal={onClose} getSetting={user} />
      </div>
    </div>
  );
}

