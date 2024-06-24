// import { useSelector } from 'react-redux';
// import { selectDailyNorma } from '../../redux/user/selectors';
import css from './WaterDailyNorma.module.css';

const WaterDailyNorma = () => {
  //   const dailyNorma = useSelector(selectDailyNorma);
  //   const dailyNormaL = dailyNorma / 1000 || 2;
  const dailyNormaL = 2;

  return (
    <div className={css.dailyNormaWrap}>
      <p className={css.quantity}>{dailyNormaL} L</p>
      <p className={css.desc}>My daily norma</p>
    </div>
  );
};
export default WaterDailyNorma;
