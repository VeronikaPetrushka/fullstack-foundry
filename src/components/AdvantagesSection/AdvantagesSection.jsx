import { getTotalUsers } from '../../redux/user/operations';
import { selectUserCount } from '../../redux/user/selectors';
import { useSelector, useDispatch } from 'react-redux';
import css from './AdvantagesSection.module.css';

import user1 from '../../assets/img/user1.png';
import user2 from '../../assets/img/user2.png';
import user3 from '../../assets/img/user3.png';
import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';

export const AdvantagesSection = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotalUsers()).unwrap();
  }, [dispatch]);

  const totalUsers = useSelector(selectUserCount);

  return (
    <div className={css.advantagesSection}>
      <div className={css.customersBox}>
        <ul className={css.customersList}>
          <li className={css.customersItem}>
            <img className={css.customersImg} src={user1} alt="user1" />
          </li>

          <li className={css.customersItem}>
            <img className={css.customersImg} src={user2} alt="user2" />
          </li>

          <li className={css.customersItem}>
            <img className={css.customersImg} src={user3} alt="user3" />
          </li>
        </ul>

        <p className={css.customersText}>
          <Trans
            i18nKey="ourHappy"
            values={{
              classStyle: css.span,
              count: totalUsers,
            }}
            components={{s: <span />}}
          />
        </p>
      </div>

      <div className={css.group}>
        <ul className={css.advantagesGroup}>
          <li className={css.textAdvantage}>
            <div className={css.circle}></div>
            <p className={css.text}>{t('habitDrive')}</p>
          </li>
          <li className={css.textAdvantage}>
            <p className={css.textBlack}>{t('viewStat')}</p>
          </li>
          <li className={css.textAdvantage}>
            <p className={css.textBlack}>{t('personalRate')}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
