import css from './UserPanel.module.css'
import { useSelector } from 'react-redux';
import { selectUserInfo } from '../../redux/user/selectors';

const UserPanel = () => {
  const user = useSelector(selectUserInfo);
    return (
        <div className={css.hiUserWrapper}>
            <h1 className={css.hiUser}>Hello,
                {user.name ? (
                    <span className={css.userName}> {user.name}</span>
                ) : (
                    <span className={css.userName}> You</span>
                )}
            </h1>
        </div>
    )
}

export default UserPanel;