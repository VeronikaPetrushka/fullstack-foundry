import css from './WaterMainInfo.module.css';
import WaterDailyNorma from '../WaterDailyNorma/WaterDailyNorma';
import WaterProgressBar from '../WaterProgressBar/WaterProgressBar';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn';
import LangSwitch from '../../components/LangSwitch/LangSwitch';

const WaterMainInfo = ({ selectedDate }) => {
  return (
    <section className={css.waterMainInfoWrapper}>
      <LangSwitch />
      <WaterDailyNorma />
      <WaterProgressBar selectedDate={selectedDate} />
      <AddWaterBtn />
    </section>
  );
};
export default WaterMainInfo;
