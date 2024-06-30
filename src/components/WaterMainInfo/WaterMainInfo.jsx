import css from './WaterMainInfo.module.css';
import WaterDailyNorma from '../WaterDailyNorma/WaterDailyNorma';
import WaterProgressBar from '../WaterProgressBar/WaterProgressBar';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn';
import DailyInfo from '../DailyInfo/DailyInfo';

const WaterMainInfo = ({ selectedDate }) => {
  return (
    <section className={css.waterMainInfoWrapper}>
      <WaterDailyNorma />
      <WaterProgressBar selectedDate={selectedDate} />
      <AddWaterBtn />
      <DailyInfo selectedDate={selectedDate} />
    </section>
  );
};

export default WaterMainInfo;
