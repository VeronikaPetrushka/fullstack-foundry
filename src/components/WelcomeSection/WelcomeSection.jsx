import { NavLink } from 'react-router-dom';
import css from './WelcomeSection.module.css';

import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import '../../i18n/index.js/';



export const WelcomeSection = () => {
  
  const { t } = useTranslation();

  return (
    <div className={css.welcomeSection}>
      <p className={css.text}>{t('Record daily water intake and track')}</p>
      <h1 className={css.title}>{t('Water consumption tracker')}</h1>
      <div className={css.linkBox}>
        <NavLink to="/signup" className={css.linkSignUP}>
          {t('Try tracker')}
        </NavLink>
        <NavLink to="/signin" className={css.linkSignIn}>
          {t('Sign In')}
        </NavLink>
      </div>
      <div>
        <br />
        <button disabled={i18next.language === 'en'} onClick={() => i18next.changeLanguage('en')}>EN</button>
        <button disabled={i18next.language === 'uk'} onClick={() => i18next.changeLanguage('uk')}>UA</button>
      </div>
    </div>
  );
};
