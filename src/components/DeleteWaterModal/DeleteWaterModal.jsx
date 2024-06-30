import { useDispatch } from "react-redux";
import css from "./DeleteWaterModal.module.css";
import { deleteWater } from "../../redux/water/operations";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

export const DeleteWaterModal = ({ onClose, id }) => {
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const handleDelete = async () => {
    try {
      await dispatch(deleteWater(id))
      toast.success(t('waterDeleted'));
    } catch (error) {
      toast.error(t('deleteWaterError'));
    }
    onClose();
  };

  return (
    <div className={css.modalBox}>
      <p className={css.title}>{t('deleteEntry')}</p>
      <p className={css.text}>{t('youWantDelete')}</p>
      <div className={css.btnBox}>
        <button className={css.logOutBtn} onClick={handleDelete}>
          {t('deleteBtn')}
        </button>
        <button className={css.cancelBtn} onClick={onClose}>
          {t('cancelBtn')}
        </button>
      </div>
    </div>
  );
};
