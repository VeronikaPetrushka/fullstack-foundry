import css from './UserPanel.module.css'
import { useSelector } from 'react-redux';
import { selectUserInfo } from '../../redux/user/selectors';

const UserPanel = () => {
  const user = useSelector(selectUserInfo);
    return (
        <div className={css.hiUserWrapper}>
            <h1 className={css.hiUser}>Hello,
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