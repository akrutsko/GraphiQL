import { useContext } from 'react';

import { Language } from '../contexts/LanguageContext';

export function useLanguage() {
  return useContext(Language);
}
