import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import css from "./LogOutModal.module.css";
import { logout } from "../../redux/auth/operations";
import Icon from "../Icon/Icon";

export const LogOutModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(logout());
    navigate('/');
    onClose();
  };

  return (
    <div className={css.modalBox}>
      <button type="button" className={css.close} onClick={() => onClose()}>
        <Icon width="28" height="28" iconName="close" styles="icon-close" />
      </button>
      <p className={css.title}>Log out</p>
      <p className={css.text}>Do you really want to leave?</p>
      <div className={css.btnBox}>
        <button
          className={css.logOutBtn}
          onClick={handleLogout}
        >
          Log out
        </button>
        <button className={css.cancelBtn} onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};
