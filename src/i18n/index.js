import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import i18next from "i18next";
import { LOCALES } from "./constants";
import { uk } from "./languages/uk";
import { en } from "./languages/en";


console.log(i18next.language);

const resources = {
  [LOCALES.EN]: {
    translation: en
  },
  [LOCALES.UA]: {
    translation: uk
  }
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: [LOCALES.EN],

    interpolation: {
      escapeValue: false
    },
  });

  export default i18n;

