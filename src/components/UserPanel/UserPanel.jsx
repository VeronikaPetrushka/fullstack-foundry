import css from './UserPanel.module.css'
import { useSelector } from 'react-redux';
import { selectUserName } from '../../redux/user/selectors';

const UserPanel = () => {
    const userName = useSelector(selectUserName)
    return (
        <div className={css.hiUserWrapper}>
            <h1 className={css.hiUser}>Hello,
                {userName ? (
                    <span className={css.userName}> {userName}</span>
                ) : (
                    <span className={css.userName}> You</span>
                )}
            </h1>
        </div>
    )
}

export default UserPanel;