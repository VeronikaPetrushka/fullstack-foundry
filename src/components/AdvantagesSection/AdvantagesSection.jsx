import css from './AdvantagesSection.module.css';

// import user1 from '../../img/user1.png';
// import user2 from '../../img/user2.png';
// import user3 from '../../img/user3.png';

export const AdvantagesSection = () => {
  return (
    <div className={css.advantagesSection}>
     

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

