import { useState, useEffect, useCallback } from 'react';
import css from './AddWaterBtn.module.css';
import Icon from '../Icon/Icon';
import WaterModal from '../WaterModal/WaterModal';
import BasicModal from '../BasicModal/BasicModal';
import { useDispatch, useSelector } from 'react-redux';
import { addWater } from '../../redux/water/operations';
import toast from 'react-hot-toast';
import { selectIsLoading } from '../../redux/water/selectors';
import Loader from '../Loader/Loader';

const AddWaterBtn = ({ isBig = true, selectedDate }) => {

  const [modIsOpen, setModIsOpen] = useState(false);
  const [initialData, setInitialData] = useState({ amount: 50, time: '' });

  const isLoading = useSelector(selectIsLoading);

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

    try {
      const date = new Date(data.date);
      const [hours, minutes] = data.time ? data.time.split(':') : [String(date.getHours()).padStart(2, '0'), String(date.getMinutes()).padStart(2, '0')];
      const sendData = {
        amount: data.amount,
        date: selectedDate.fullDate + 'T' + hours + ':' + minutes,
      }

      await dispatch(addWater(sendData));
      closeWaterModal();
    } catch (error) {
      toast.error(error.message || "Something went wrong. Please try again");
      console.error('Error submitting data:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <>
      {isLoading && (
        <div className={css.loaderBg}>
          <Loader addClass={css.monthDataLoader} />
        </div>
      )}

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
