import { useState } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import css from './UserSettingsModal.module.css';
import UserSettingsForm from '../UserSettingsForm/UserSettingsForm';
import { selectUser } from '../../redux/auth/selectors';

export default function UserSettingsModal({ closeModal, isOpen }) {
  const [get_setting, setGet_setting] = useState([]);

  const user = useSelector(selectUser);

  useNavigate(() => {
    if (!isOpen) {
      return;
    }
    setGet_setting(user);
  }, [isOpen, user]);

  return (
    <>
      <h2 className={css.title}> Setting</h2>
      <div className={css.settingBox}>
        {get_setting.length !== 0 && (
          <UserSettingsForm closeModal={closeModal} getSetting={get_setting} />
        )}
      </div>
    </>
  );
}
