import css from './LangSwitch.module.css';
import i18next from 'i18next';
import { LOCALES } from '../../i18n/constants';
import { chLang } from'../../i18n/index.js/';

const LangSwitch = () => {
  return (
    <div className={css.langSwitch}>
      <select name="lang" onChange={e => chLang(e.target.value)} className={css.langSelect}>
        <option value={LOCALES.UA.code} disabled={i18next.language === LOCALES.UA.code} selected={i18next.language === LOCALES.UA.code}>{LOCALES.UA.name}</option>
        <option value={LOCALES.EN.code} disabled={i18next.language === LOCALES.EN.code} selected={i18next.language === LOCALES.EN.code}>{LOCALES.EN.name}</option>
      </select>

    {/* <button className={css.langSwithBtn} disabled={i18next.language === LOCALES.EN} onClick={() => chLang(LOCALES.EN)}>EN</button>
    <button className={css.langSwithBtn} disabled={i18next.language === LOCALES.UA} onClick={() => chLang(LOCALES.UA)}>UA</button> */}
  </div>

  )
}

export default LangSwitch
