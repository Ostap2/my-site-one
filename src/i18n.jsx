// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import common_en from './locales/en.json';
import common_uk from './locales/uk.json';

i18n
  .use(initReactI18next)
  .init({
    interpolation: { escapeValue: false },
    lng: 'en',
    resources: {
      en: {
        translation: common_en,
      },
      uk: {
        translation: common_uk,
      },
    },
  });

export default i18n;
