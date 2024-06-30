import css from './UserPanel.module.css'
import { useSelector } from 'react-redux';
import { selectUserInfo } from '../../redux/user/selectors';
import { useTranslation } from 'react-i18next';

const UserPanel = () => {
  const { t } = useTranslation();
  const user = useSelector(selectUserInfo);
  const getUserName = () => {
    if(user.name === "" || !user.name){
      const emailParts = user.email.split('@');
      return emailParts[0];
    }
    return user.name;
  };

    return (
        <div className={css.hiUserWrapper}>
            <h1 className={css.hiUser}>{t('hello')},
              <span className={css.userName}>{getUserName()}</span>
            </h1>
        </div>
    )
}

export default UserPanel;
