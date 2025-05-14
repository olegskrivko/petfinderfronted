// // src/i18n.js
// THIS IS FOR BACKEND
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import HttpBackend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';

// i18n
//   .use(HttpBackend)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     fallbackLng: 'en',
//     debug: true,
//     interpolation: {
//       escapeValue: false, // React already does escaping
//     },
//     backend: {
//       loadPath: '/locales/{{lng}}.json',
//     },
//     detection: {
//       order: [
//         'queryString',
//         'cookie',
//         'localStorage',
//         'sessionStorage',
//         'navigator',
//         'htmlTag',
//         'path',
//         'subdomain',
//       ],
//       caches: ['localStorage', 'cookie'],
//     },
//   });

// export default i18n;
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';

// import enTranslations from './locales/en.json';
// import lvTranslations from './locales/lv.json';
// import ruTranslations from './locales/ru.json';

// i18n
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     fallbackLng: 'en',
//     debug: true,
//     interpolation: {
//       escapeValue: false, // React already does escaping
//     },
//     resources: {
//       en: {
//         translation: enTranslations,
//       },
//       lv: {
//         translation: lvTranslations,
//       },
//       ru: {
//         translation: ruTranslations,
//       },
//     },
//     detection: {
//       order: ['queryString', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
//       caches: ['localStorage', 'cookie'],
//     },
//   });

// export default i18n;

// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';

// // Import translation files
// const importAll = (r) => {
//   let translations = {};
//   r.keys().forEach((item) => {
//     const namespace = item.replace('./', '').replace('.json', '');
//     translations[namespace] = r(item);
//   });
//   return translations;
// };

// // Import translations
// const enTranslations = importAll(require.context('./locales/en', false, /\.json$/));
// const lvTranslations = importAll(require.context('./locales/lv', false, /\.json$/));
// const ruTranslations = importAll(require.context('./locales/ru', false, /\.json$/));

// i18n
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     fallbackLng: 'en',
//     debug: true,
//     interpolation: {
//       escapeValue: false, // React already does escaping
//     },
//     resources: {
//       en: enTranslations,
//       lv: lvTranslations,
//       ru: ruTranslations,
//     },
//     detection: {
//       order: ['queryString', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
//       caches: ['localStorage', 'cookie'],
//     },
//   });

// export default i18n;
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import namespaces
import enCommon from '../src/pages/locales/en/common.json';
import enNavbar from '../src/pages/locales/en/navbar.json';
import enFooter from '../src/pages/locales/en/footer.json';
import enAboutPage from '../src/pages/locales/en/aboutPage.json';
import enSelectOptions from '../src/pages/locales/en/selectOptions.json';

import lvCommon from '../src/pages/locales/lv/common.json';
import lvNavbar from '../src/pages/locales/lv/navbar.json';
import lvFooter from '../src/pages/locales/lv/footer.json';
import lvAboutPage from '../src/pages/locales/lv/aboutPage.json';
import lvSelectOptions from '../src/pages/locales/lv/selectOptions.json';


import ruCommon from '../src/pages/locales/ru/common.json';
import ruNavbar from '../src/pages/locales/ru/navbar.json';
import ruFooter from '../src/pages/locales/ru/footer.json';
import ruAboutPage from '../src/pages/locales/ru/aboutPage.json';
import ruSelectOptions from '../src/pages/locales/ru/selectOptions.json';


i18n
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Initializes i18next with React
  .init({
    fallbackLng: 'lv', // Default language if detection fails
    debug: true, // Enable debug mode
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    resources: {
      en: {
        common: enCommon,
        navbar: enNavbar,
        footer: enFooter,
        aboutPage: enAboutPage,
        selectOptions: enSelectOptions,

      },
      lv: {
        common: lvCommon,
        navbar: lvNavbar,
        footer: lvFooter,
        aboutPage: lvAboutPage,
        selectOptions: lvSelectOptions,

      },
      ru: {
        common: ruCommon,
        navbar: ruNavbar,
        footer: ruFooter,
        aboutPage: ruAboutPage,
        selectOptions: ruSelectOptions,

      },
    },
    detection: {
      order: ['queryString', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
    },
    ns: [
      'common',
      'navbar',
      'footer',
      'aboutPage',
      'selectOptions',
    ], // Namespaces to use
    defaultNS: 'common', // Default namespace
  });

export default i18n;