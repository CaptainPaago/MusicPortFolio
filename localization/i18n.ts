import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import resources from './resources';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector) // https://www.npmjs.com/package/i18next-browser-languagedetector

  .init({
    resources,
    fallbackLng: 'en-US',
    detection: {
      order: ['cookie', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    react: {
      // transKeepBasicHtmlNodesFor: ['a'],
      useSuspense: false,
    },
  });

export default i18n;
