import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import css from "./LogOutModal.module.css";
import { logout } from "../../redux/auth/operations";

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
