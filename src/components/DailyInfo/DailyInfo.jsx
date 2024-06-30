import css from './DailyInfo.module.css';
import WaterDailyNorma from '../WaterDailyNorma/WaterDailyNorma';
import WaterProgressBar from '../WaterProgressBar/WaterProgressBar';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn';
import DailyInfo from '../DailyInfo/DailyInfo';


const DailyInfo = ({selectedDate}) => {
    return (       

<div className={css.dailyInfo}>
  <div className={css.dailyHeader}>
    <ChooseDate selectedDate={selectedDate} />
    <AddWaterBtn isBig={false} />
  </div>
  <div className={css.dailyContent}>

<WaterList />

  </div>  
</div>
    )
}

export default DailyInfo;