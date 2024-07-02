import { useDispatch } from "react-redux";
import css from "./DeleteWaterModal.module.css";
import { deleteWater } from "../../redux/water/operations";
import toast from "react-hot-toast";
import Icon from "../Icon/Icon";

export const DeleteWaterModal = ({ onClose, id }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      await dispatch(deleteWater(id));
      toast.success("The amount of water has been successfully deleted");
    } catch (error) {
      toast.error("Something went wrong. Please try again");
    }
    onClose();
  };

  return (
    <div className={css.modalBox}>
      <button type="button" className={css.close} onClick={() => onClose()}>
        <Icon width="28" height="28" iconName="close" styles="icon-close" />
      </button>
      <p className={css.title}>Delete entry</p>
      <p className={css.text}>Are you sure you want to delete the entry?</p>
      <div className={css.btnBox}>
        <button className={css.logOutBtn} onClick={handleDelete}>
          Delete
        </button>
        <button className={css.cancelBtn} onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};