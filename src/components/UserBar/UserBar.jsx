import css from './UserBar.module.css'
import { useSelector } from 'react-redux';
// import UserBarPopover from "../UserBarPopover/UserBarPopover";
import { selectUserName, selectAvatar } from '../../redux/user/selectors';

const UserBar = () => {

    const userName = useSelector(selectUserName)
    const avatar = useSelector(selectAvatar)

    return (
        <div className={css.userBarWrapper}>
            {userName ? (
                    <p className={css.userName}>{userName}</p>
                ) : (
                    <p className={css.userName}>You</p>
                )}
            {avatar ?
                <div className={css.avatarBox}>
                    <img src={avatar} className={css.avatarImg} />
                </div> : 
                <div className={css.avatarBox}>
                    <img src="src\assets\img\avatar-default.jpg" className={css.avatarImg}/>
                </div>}
        {/* <UserBarPopover /> */}
        </div>
    )
}

export default UserBar;