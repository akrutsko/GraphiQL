import { createContext, useState, type Dispatch, type PropsWithChildren, type SetStateAction } from 'react';

import { LANG_EN } from '../constants';
import type { Lang } from '../types';

export const Language = createContext<Lang>(LANG_EN);
export const LanguageDispatchContext = createContext<Dispatch<SetStateAction<Lang>> | null>(null);

const LanguageProvider = ({ children }: PropsWithChildren) => {
  const [language, setLanguage] = useState<Lang>(LANG_EN);

  return (
    <Language.Provider value={language}>
      <LanguageDispatchContext.Provider value={setLanguage}>{children}</LanguageDispatchContext.Provider>
    </Language.Provider>
  );
};

export default LanguageProvider;
