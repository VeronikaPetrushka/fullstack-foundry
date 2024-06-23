import WaterList from '../../components/WaterList/WaterList';
import css from './DailyInfo.module.css';

const DailyInfo = () => {
    return (
        

<div className={css.dailyInfo}>
  <div className={css.dailyHeader}>
    <h3 className={css.title}>Today</h3>
    <button  className={css.button}>Add water</button>
  </div>
  <div className={css.dailyContent}>
<WaterList/>


  </div>  
</div>
    )
}

export default DailyInfo;