import { getTotalUsers } from '../../redux/user/operations';
import { selectUserCount } from '../../redux/user/selectors';
import { useSelector, useDispatch } from 'react-redux';
import css from './AdvantagesSection.module.css';

import user1 from '../../assets/img/user1.png';
import user2 from '../../assets/img/user2.png';
import user3 from '../../assets/img/user3.png';

import { useDispatch, useSelector } from 'react-redux';
import { selectAllUsers } from '../../redux/user/selectors';
import { useEffect } from 'react';
import { getTotalUsers } from '../../redux/user/operations';

export const AdvantagesSection = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector(selectAllUsers);


  useEffect(() => {
    const fetchData = async () => {
      if (!allUsers) {
        await dispatch(getTotalUsers());
      }
    };

    fetchData();
  }, [dispatch, allUsers]);

// import { useEffect } from 'react';

// export const AdvantagesSection = () => {

//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getTotalUsers()).unwrap();
//   }, [dispatch])

//   const totalUsers = useSelector(selectUserCount);

  return (
    <div className={css.advantagesSection}>
      <div className={css.customersBox}>
        <ul className={css.customersList}>
          <li className={css.customersItem}>
            {totalUsers ? <span className={css.totalUsers}>{totalUsers}</span> : '<img className={css.customersImg} src={user1} alt="user1" />'}
          </li>
          <li className={css.customersItem}>
            <img className={css.customersImg} src={user2} alt="user2" />
          </li>
          <li className={css.customersItem}>
            <img className={css.customersImg} src={user3} alt="user3" />
          </li>
        </ul>
        <p className={css.customersText}>
          Our <span className={css.span}>{allUsers}</span> happy customers
        </p>
      </div>

      <div className={css.group}>
        <ul className={css.advantagesGroup}>
          <li className={css.textAdvantage}>
            <div className={css.circle}></div>
            <p className={css.text}>Habit drive</p>
          </li>
          <li className={css.textAdvantage}>
            <p className={css.textBlack}>View statistics</p>
          </li>
          <li className={css.textAdvantage}>
            <p className={css.textBlack}>Personal rate setting</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
