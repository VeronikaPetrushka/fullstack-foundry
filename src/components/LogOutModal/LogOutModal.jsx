import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import css from "./LogOutModal.module.css";
import { logout } from "../../redux/auth/operations";
import { useTranslation } from "react-i18next";

export const LogOutModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { t } = useTranslation();
  const handleLogout = async () => {
    await dispatch(logout());
    navigate('/');
    onClose();
  };

  return (
    <div className={css.modalBox}>
      <p className={css.title}>{t('logout')}</p>
      <p className={css.text}>{t('logoutText')}</p>
      <div className={css.btnBox}>
        <button
          className={css.logOutBtn}
          onClick={handleLogout}
        >
          {t('logout')}
        </button>
        <button className={css.cancelBtn} onClick={onClose}>
          {t('cancelBtn')}
        </button>
      </div>
    </div>
  );
};
