import css from './WaterMainInfo.module.css';
import WaterDailyNorma from '../WaterDailyNorma/WaterDailyNorma';
import WaterProgressBar from '../WaterProgressBar/WaterProgressBar';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn';
import WaterList from '../WaterList/WaterList';

const WaterMainInfo = ({ selectedDate }) => {

  return (
    <section className={css.waterMainInfoWrapper}>
      <WaterDailyNorma />
      <WaterProgressBar selectedDate={selectedDate} />
      <AddWaterBtn selectedDate={selectedDate} />
      <div style={{ display: 'none' }}>
        <WaterList />
      </div>
    </section>
  );
};

export default WaterMainInfo;
