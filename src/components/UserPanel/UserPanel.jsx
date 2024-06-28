import css from './UserPanel.module.css'
import { useSelector } from 'react-redux';
import { selectUserInfo } from '../../redux/user/selectors';
import { useTranslation } from 'react-i18next';

const UserPanel = () => {
  const { t } = useTranslation();
  const user = useSelector(selectUserInfo);
    return (
        <div className={css.hiUserWrapper}>
            <h1 className={css.hiUser}>{t('hello')},
                {user.userName ? (
                    <span className={css.userName}> {user.userName}</span>
                ) : (
                    <span className={css.userName}> You</span>
                )}
            </h1>
        </div>
    )
}

export default UserPanel;
