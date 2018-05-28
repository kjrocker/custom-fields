import * as detector from 'i18next-browser-languagedetector';
import backend from 'i18next-fetch-backend';
const i18n = require('i18next');

i18n
  .use(backend)
  .use(detector)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false // not needed for react!!
    },
    ns: ['common'],
    defaultNS: 'common',
    // backend specific options
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    },
    // detector specific options
    detection: {},
    // react i18next special options (optional)
    react: {
      wait: true
    }
  });

export default i18n;
