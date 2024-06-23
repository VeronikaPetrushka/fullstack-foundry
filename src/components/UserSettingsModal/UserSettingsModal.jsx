import UserSettingsForm from '../UserSettingsForm/UserSettingsForm';
import css from './UserSettingsModal.module.css';

const UserSettingsModal = () => {
  return (
    <div className={css.settings}>
      <h1>Setting</h1>
      <UserSettingsForm />;
    </div>
  );
};

export default UserSettingsModal;
