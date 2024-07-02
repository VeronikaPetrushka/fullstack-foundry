import { useState, useEffect, useCallback } from 'react';
import css from './AddWaterBtn.module.css';
import Icon from '../Icon/Icon';
import WaterModal from '../WaterModal/WaterModal';
import BasicModal from '../BasicModal/BasicModal';
import { useDispatch } from 'react-redux';
import { addWater } from '../../redux/water/operations';

const AddWaterBtn = ({ isBig = true, selectedDate }) => {

  const [modIsOpen, setModIsOpen] = useState(false);
  const [initialData, setInitialData] = useState({ amount: 50, time: '' });

  const dispatch = useDispatch();

  useEffect(() => {
    if (modIsOpen) {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const currentTime = `${hours}:${minutes}`;
      setInitialData({ amount: 50, time: currentTime });
    }
  }, [modIsOpen, selectedDate]);

  const closeWaterModal = useCallback(() => {
    setModIsOpen(false);
  }, []);

  const handleSubmit = async (data) => {
    console.log("data: ",data);
    try {
      const date = new Date(data.date);
      const [hours, minutes] = data.time ? data.time.split(':') : [String(date.getHours()).padStart(2, '0'), String(date.getMinutes()).padStart(2, '0')];
      // date.setHours(hours);
      // date.setMinutes(minutes);
      const sendData = {
        amount: data.amount,
        date: selectedDate.fullDate + 'T' + hours + ':' + minutes,
      }
console.log("sended data: ",sendData);
      await dispatch(addWater(sendData));
      closeWaterModal();
    } catch (error) {
      console.error('Error submitting data:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <>
      <div className={css.addBtnWrap}>
        <button
          className={isBig ? css.btnBig : css.btnSmall}
          type="button"
          onClick={() => setModIsOpen(true)}
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
        <WaterModal
          isOpen={modIsOpen}
          onClose={closeWaterModal}
          onSubmit={handleSubmit}
          type="add"
          initialData={initialData}
        />
      </BasicModal>
    </>
  );
};

export default AddWaterBtn;
