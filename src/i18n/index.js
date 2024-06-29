import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18next from 'i18next';
import { LOCALES } from './constants';
import { uk } from './languages/uk';
import { en } from './languages/en';

const resources = {
  [LOCALES.EN.code]: {
    translation: en,
  },
  [LOCALES.UA.code]: {
    translation: uk,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: [LOCALES.EN.code],

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;


export const chLang = (lang) => {
  i18next.changeLanguage(lang);
}
