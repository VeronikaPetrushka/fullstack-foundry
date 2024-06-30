import { useState, useEffect } from 'react';
import axios from 'axios';
import css from './AddWaterBtn.module.css';
import Icon from '../Icon/Icon';
import WaterModal from '../WaterModal/WaterModal';

const AddWaterBtn = ({ isBig = true, fetchDailyActivity }) => {
  const [modIsOpen, setModIsOpen] = useState(false);
  const [initialData, setInitialData] = useState({ amount: 50, time: '' });

  useEffect(() => {
    if (modIsOpen) {
      const fetchData = async () => {
        try {
          const token = localStorage.getItem('token');
          await axios.post('https://aquatrack-api-myzh.onrender.com/api/water/day', { date: new Date().toISOString().split('T')[0] }, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
        } catch (error) {
          console.error('Error fetching water items:', error);
        }
      };
      fetchData();

      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const currentTime = `${hours}:${minutes}`;
      setInitialData({ amount: 50, time: currentTime });
    }
  }, [modIsOpen]);

  const closeWaterModal = async () => {
    setModIsOpen(false);
    await fetchDailyActivity(); 
  };

  const handleSubmit = async (data) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('https://aquatrack-api-myzh.onrender.com/api/water', {
        amount: data.amount,
        date: new Date().toISOString().split('T')[0] 
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      closeWaterModal();
    } catch (error) {
      console.error('Error submitting data:', error.response ? error.response.data : error.message);
      console.log('Error details:', error.response);
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
      <WaterModal
        isOpen={modIsOpen}
        onClose={closeWaterModal}
        onSubmit={handleSubmit}
        type="add"
        initialData={initialData}
      />
    </>
  );
};


export default AddWaterBtn;
