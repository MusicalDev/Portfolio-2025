'use client';

import { useLanguage } from '../../context/languageContext';
import es from '../../messages/es.json';
import en from '../../messages/en.json';

export function useTranslations() {
  const { locale } = useLanguage();
  const messages = locale === 'es' ? es : en;

  return (key) => {
    // Soporta claves anidadas como 'home.title'
    return key.split('.').reduce((obj, part) => obj?.[part], messages) || key;
  };
}
