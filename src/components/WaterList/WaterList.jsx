
import { useSelector } from 'react-redux';
import WaterItem from '../WaterItem/WaterItem';
import WaterModal from '../WaterModal/WaterModal';
import css from './WaterList.module.css';
import {selectWaterDaily} from '../../redux/water/selectors';


const WaterList = () => {
    
    const dayWater = useSelector(selectWaterDaily);
       

        return (
            <div className={css.container}>
                <ul className={css.waterList}>
                    {dayWater.map((day) => (
                        <li key={day._id} >
                            <WaterItem day={day} id={day._id} />
                        </li>
                    ))}
                </ul>
            </div>
        )                    
}

export default WaterList;
