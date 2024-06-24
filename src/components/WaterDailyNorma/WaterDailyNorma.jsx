import { useSelector } from 'react-redux';
import { selectDailyNorma } from '../../redux/user/selectors';
import css from './WaterDailyNorma.module.css';

const WaterDailyNorma = () => {
  const dailyNorma = useSelector(selectDailyNorma);
  // console.log(dailyNorma);

  return (
    <div className={css.dailyNormaWrap}>
      <p className={css.quantity}>
        {dailyNorma ? `${dailyNorma / 1000} ` : '2 '}L
      </p>
      <p className={css.desc}>My daily norma</p>
    </div>
  );
};
export default WaterDailyNorma;
