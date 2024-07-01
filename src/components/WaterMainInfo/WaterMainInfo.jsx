import { useState, useEffect } from 'react';
import css from './WaterMainInfo.module.css';
import WaterDailyNorma from '../WaterDailyNorma/WaterDailyNorma';
import WaterProgressBar from '../WaterProgressBar/WaterProgressBar';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn';
import WaterList from '../WaterList/WaterList';
import axios from 'axios';

const WaterMainInfo = ({ selectedDate }) => {
  const [waterItems, setWaterItems] = useState([]);

  const fetchDailyActivity = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('https://aquatrack-api-myzh.onrender.com/api/water/day', { date: new Date().toISOString().split('T')[0] }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      // console.log(`[WaterMainInfo] ${new Date().toLocaleTimeString()}: Отримано щоденну активність`, response.data);
      setWaterItems(response.data);
    } catch (error) {
      // console.error('Помилка при отриманні водних елементів:', error);
    }
  };

  useEffect(() => {
    fetchDailyActivity();
  }, []);

  return (
    <section className={css.waterMainInfoWrapper}>
      <WaterDailyNorma />
      <WaterProgressBar selectedDate={selectedDate} />
      <AddWaterBtn fetchDailyActivity={fetchDailyActivity} />
      <div style={{ display: 'none' }}>
        <WaterList fetchDailyActivity={fetchDailyActivity} waterItems={waterItems} />
      </div>
    </section>
  );
};

export default WaterMainInfo;
