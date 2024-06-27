import { useState } from 'react';
import css from './AddWaterBtn.module.css';
import Icon from '../Icon/Icon';
import { BasicModal } from '../BasicModal/BasicModal';
import WaterModal from '../WaterModal/WaterModal';

const AddWaterBtn = ({ isBig = true }) => {
  const [modIsOpen, setModIsOpen] = useState(false);
  const openWaterModal = () => {
    setModIsOpen(true);
  };
  const closeWaterModal = () => {
    setModIsOpen(false);
  };

  return (
    <>
      <div className={css.addBtnWrap}>
        <button
          className={isBig ? css.btnBig : css.btnSmall}
          type="button"
          onClick={openWaterModal}
        >
          {isBig ? (
            <Icon
              iconName="plus"
              width="18"
              height="18"
              styles={css.iconWhite}
            />
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
      <BasicModal isOpen={modIsOpen} onClose={closeWaterModal}>
        <WaterModal onClose={closeWaterModal} />
      </BasicModal>
    </>
  );
};
export default AddWaterBtn;
