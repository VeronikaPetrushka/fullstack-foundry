import { useSelector } from 'react-redux';
import { selectUserInfo } from '../../redux/user/selectors';
import css from './WaterDailyNorma.module.css';
import { useTranslation } from 'react-i18next';

const WaterDailyNorma = () => {
  const user = useSelector(selectUserInfo);
  const { t } = useTranslation();

  return (
    <div className={css.dailyNormaWrap}>
      <p className={css.quantity}>
        {user.dailyNorma ? `${user.dailyNorma / 1000} ` : '2 '}L
      </p>
      <p className={css.desc}>{t('myDailyNorma')}</p>
    </div>
  );
};
export default WaterDailyNorma;
