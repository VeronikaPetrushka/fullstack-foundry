import { useSelector } from 'react-redux';
import { selectUserInfo } from '../../redux/user/selectors';
import css from './WaterDailyNorma.module.css';

const WaterDailyNorma = () => {
  const user = useSelector(selectUserInfo);
  // console.log(dailyNorma);

  return (
    <div className={css.dailyNormaWrap}>
      <p className={css.quantity}>
        {user.dailyNorma ? `${user.dailyNorma / 1000} ` : '2 '}L
      </p>
      <p className={css.desc}>My daily norma</p>
    </div>
  );
};
export default WaterDailyNorma;
