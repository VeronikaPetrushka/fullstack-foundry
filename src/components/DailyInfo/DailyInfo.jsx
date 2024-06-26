import WaterList from '../WaterList/WaterList';
import css from './DailyInfo.module.css';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn';
import ChooseDate from '../ChooseDate/ChooseDate';


const DailyInfo = ({selectedDate}) => {
    return (       

<div className={css.dailyInfo}>
  <div className={css.dailyHeader}>
    <ChooseDate selectedDate={selectedDate} />
    <AddWaterBtn isBig={false} />
  </div>
  <div className={css.dailyContent}>

<WaterList/>

  </div>  
</div>
    )
}

export default DailyInfo;