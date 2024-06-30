import { useState } from 'react';
import css from './AddWaterBtn.module.css';
import Icon from '../Icon/Icon';
import WaterModal from '../WaterModal/WaterModal';

const AddWaterBtn = ({ isBig = true }) => {
  const [modIsOpen, setModIsOpen] = useState(false);

  const openAddModal = () => {
    setModIsOpen(true);
  };

  const closeWaterModal = () => {
    setModIsOpen(false);
  };

  // Видалення використання змінної data, оскільки вона не використовується.
  const handleSubmit = async () => {
    // Логіка для відправки даних
  };

  return (
    <>
      <div className={css.addBtnWrap}>
        <button
          className={isBig ? css.btnBig : css.btnSmall}
          type="button"
          onClick={openAddModal}
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
      <WaterModal
        isOpen={modIsOpen}
        onClose={closeWaterModal}
        onSubmit={handleSubmit}
        type="add"
        initialData={{ amount: 50, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }}
      />
    </>
  );
};

export default AddWaterBtn;
