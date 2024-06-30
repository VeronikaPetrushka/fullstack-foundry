import  { useEffect } from 'react';
import css from './WaterMainInfo.module.css';
import WaterDailyNorma from '../WaterDailyNorma/WaterDailyNorma';
import WaterProgressBar from '../WaterProgressBar/WaterProgressBar';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn';
import axios from 'axios';

const WaterMainInfo = ({ selectedDate }) => {
  const fetchDailyActivity = async () => {
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

  useEffect(() => {
    fetchDailyActivity();
  }, []);

  return (
    <section className={css.waterMainInfoWrapper}>
      <WaterDailyNorma />
      <WaterProgressBar selectedDate={selectedDate} />
      <AddWaterBtn fetchDailyActivity={fetchDailyActivity} />
    </section>
  );
};

export default WaterMainInfo;
