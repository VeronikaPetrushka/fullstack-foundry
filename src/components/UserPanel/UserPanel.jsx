import css from './UserPanel.module.css'
import { useSelector } from 'react-redux';
import { selectUserInfo } from '../../redux/user/selectors';

const UserPanel = () => {
  const user = useSelector(selectUserInfo);

  const getUserName = () => {
    if(user.name === "" || !user.name){
      const emailParts = String(user.email).split('@');
      return emailParts[0];
    }
    return user.name;
  };

    return (
        <div className={css.hiUserWrapper}>
            <h1 className={css.hiUser}>Hello,
                    <span className={css.userName}> {getUserName()}</span>
            </h1>
        </div>
    )
}

export default UserPanel;
