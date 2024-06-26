import css from './WaterMainInfo.module.css';
import WaterDailyNorma from '../WaterDailyNorma/WaterDailyNorma';
import WaterProgressBar from '../WaterProgressBar/WaterProgressBar';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn';

const WaterMainInfo = ({ selectedDate }) => {
  return (
    <section className={css.waterMainInfoWrapper}>
      <WaterDailyNorma />
      <WaterProgressBar selectedDate={selectedDate} />
      <AddWaterBtn />
    </section>
  );
};
export default WaterMainInfo;
