// import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';
import WaterItem from '../WaterItem/WaterItem';
import WaterModal from '../WaterModal/WaterModal';
import css from './WaterList.module.css';
// import {selectWaterDaily} from '../../redux/water/selectors';


const WaterList = () => {
    
//     const dayWater = useSelector(selectWaterDaily);
       

//         return (
//             <div className={css.container}>
//                 <ul className={css.waterList}>
//                     {dayWater.map((day) => (
//                         <li key={day._id} >
//                             <WaterItem day={day} id={day._id} />
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         )                    

  const [waterItems, setWaterItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://aquatrack-api-myzh.onrender.com/api/water', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setWaterItems(response.data);
      } catch (error) {
        console.error('Error fetching water items:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={css.container}>
      <ul className={css.waterList}>
        {waterItems.length > 0 ? (
          waterItems.map(item => (
            <li className={css.waterItem} key={item.id}>
              <WaterItem item={item} />
            </li>
          ))
        ) : (
          <li>No water data available</li>
        )}
      </ul>
    </div>
  );
};

export default WaterList;
