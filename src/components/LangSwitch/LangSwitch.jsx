import css from './LangSwitch.module.css';
import i18next from 'i18next';
import { LOCALES } from '../../i18n/constants';
import { chLang } from'../../i18n/index.js/';

const LangSwitch = () => {
  return (
    <div className={css.langSwitch}>
    <button className={css.langSwithBtn} disabled={i18next.language === LOCALES.EN} onClick={() => chLang(LOCALES.EN)}>EN</button>
    <button className={css.langSwithBtn} disabled={i18next.language === LOCALES.UA} onClick={() => chLang(LOCALES.UA)}>UA</button>
  </div>

  )
}

export default LangSwitch
