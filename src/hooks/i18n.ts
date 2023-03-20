import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from '@/translations';

i18n.use(initReactI18next).init({
  // Local Storageden getirilecek
  lng: 'en',
  fallbackLng: 'en',
  saveMissing: true,
  resources,
  debug: true,
  parseMissingKeyHandler: (key, defaultValue) => {
    return `${key} is missing, ${defaultValue}`;
  },
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

export default i18n;
