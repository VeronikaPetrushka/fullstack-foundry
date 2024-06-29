import { NavLink } from 'react-router-dom';
import css from './WelcomeSection.module.css';

import LangSwitch from '../../components/LangSwitch/LangSwitch';
import { useTranslation } from 'react-i18next';

export const WelcomeSection = () => {

  const { t } = useTranslation();


  return (
    <div className={css.welcomeSection}>
      <LangSwitch />
      <p className={css.text}>{t('subtitle')}</p>
      <h1 className={css.title}>{t('title')}</h1>
      <div className={css.linkBox}>
        <NavLink to="/signup" className={css.linkSignUP}>
          {t('signup')}
        </NavLink>
        <NavLink to="/signin" className={css.linkSignIn}>
          {t('signin')}
        </NavLink>
      </div>
    </div>
  );
};
