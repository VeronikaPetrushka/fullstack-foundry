import css from './AddWaterBtn.module.css';
import Icon from '../Icon/Icon';

const AddWaterBtn = ({ isBig = true }) => {
  return (
    <div className={css.addBtnWrap}>
      <button
        className={isBig ? css.btnBig : css.btnSmall}
        type="button"
        // onClick={openWaterModal}
      >
        {isBig ? (
          <Icon iconName="plus" width="18" height="18" styles={css.iconWhite} />
        ) : (
          <div className={css.iconWrapper}>
            <Icon
              iconName="plus"
              width="18"
              height="18"
              styles={css.iconGrey}
            />
          </div>
        )}
        <span className={isBig ? css.txtSmall : css.txtBig}>Add water</span>
      </button>
    </div>
  );
};
export default AddWaterBtn;
