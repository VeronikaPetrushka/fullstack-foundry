import WaterList from '../../components/WaterList/WaterList';
import css from './DailyInfo.module.css';
import Icon from '../../components/Icon/Icon';


const DailyInfo = () => {
    return (       

<div className={css.dailyInfo}>
  <div className={css.dailyHeader}>
    <h3 className={css.title}>Today</h3>
    <button className={css.button}>
    <div className={css.iconBackground}>
            <Icon 
              width={30} 
              height={30} 
              iconName="plus-round" 
              styles={css.icon} 
            />
          </div>
      Add water
      </button>
  </div>
  <div className={css.dailyContent}>

<WaterList/>

  </div>  
</div>
    )
}

export default DailyInfo;