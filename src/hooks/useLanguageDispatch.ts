import { useContext } from 'react';

import { LanguageDispatchContext } from '../contexts/LanguageContext';

export function useLanguageDispatch() {
  const setLanguage = useContext(LanguageDispatchContext);

  if (!setLanguage) {
    throw new Error('useSearchDispatch has to be used within <LanguageDispatchContext.Provider>');
  }

  return setLanguage;
}
