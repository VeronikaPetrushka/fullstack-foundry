import  { useState, useEffect } from 'react';
import WaterList from '../WaterList/WaterList';
import css from './DailyInfo.module.css';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn';
import ChooseDate from '../ChooseDate/ChooseDate';
import axios from 'axios';

const DailyInfo = ({ selectedDate }) => {
  const [waterItems, setWaterItems] = useState([]);

  const fetchDailyActivity = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('https://aquatrack-api-myzh.onrender.com/api/water/day', { date: new Date().toISOString().split('T')[0] }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setWaterItems(response.data);
    } catch (error) {
      console.error('Error fetching water items:', error);
    }
  };

  useEffect(() => {
    fetchDailyActivity();
  }, []);

  return (
    <div className={css.dailyInfo}>
      <div className={css.dailyHeader}>
        <ChooseDate selectedDate={selectedDate} />
        <AddWaterBtn isBig={false} fetchDailyActivity={fetchDailyActivity} />
      </div>
      <div className={css.dailyContent}>
        <WaterList fetchDailyActivity={fetchDailyActivity} waterItems={waterItems} />
      </div>
    </div>
  );
};

export default DailyInfo;
