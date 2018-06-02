import * as detector from 'i18next-browser-languagedetector';
const backend = require('i18next-xhr-backend');
const i18n = require('i18next');

const instance = i18n
  .createInstance()
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

export default instance;
