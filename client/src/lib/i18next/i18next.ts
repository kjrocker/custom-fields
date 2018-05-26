import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';

const instance = i18n.use(Backend).init({
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false // not needed for react!!
  },
  backend: {
    // for all available options read the backend's repository readme file
    loadPath: '/locales/{{lng}}.json'
  },
  // react i18next special options (optional)
  react: {
    wait: false,
    bindI18n: 'languageChanged loaded',
    bindStore: 'added removed',
    nsMode: 'default'
  }
});

export default instance;
