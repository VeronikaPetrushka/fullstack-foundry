import { useSelector } from 'react-redux';
import css from './UserSettingsModal.module.css';
import UserSettingsForm from '../UserSettingsForm/UserSettingsForm';
import { selectUserInfo } from '../../redux/user/selectors';

export default function UserSettingsModal({ closeModal, isOpen }) {
  const user = useSelector(selectUserInfo);

  return (
    <div className={`${css.modal} ${isOpen ? css.open : ''}`}>
      <h2 className={css.title}>Settings</h2>
      <div className={css.settingBox}>
        <UserSettingsForm closeModal={closeModal} getSetting={user} />
      </div>
    </div>
  );
}
