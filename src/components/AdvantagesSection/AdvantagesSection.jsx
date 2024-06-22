import css from './AdvantagesSection.module.css';
import '../../styles/styles.scss';
import user1 from '../../img/user1.png';
import user2 from '../../img/user2.png';
import user3 from '../../img/user3.png';

export const AdvantagesSection = () => {
  return (
    <div className={css.advantagesSection}>
      <div className={css.customersBox}>
        <ul className={css.customerImg}>
          <li className={css.item}>
            <img className={css.img} src={user1} alt="girl1" />
          </li>

          <li className={css.item}>
            <img className={css.img} src={user2} alt="boy" />
          </li>

          <li className={css.item}>
            <img className={css.img} src={user3} alt="girl2" />
          </li>
        </ul>
      </div>

      <div className={css.group}>
        <ul className={css.advantagesGroup}>
          <li className={css.textAdvantage}>
            <div className={css.ellipse}></div>
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

