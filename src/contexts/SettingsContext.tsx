import type { PropsWithChildren } from 'react';

import LanguageProvider from './LanguageContext.tsx';
import ThemesProvider from './ThemesContext.tsx';

const SettingsContext = ({ children }: PropsWithChildren) => {
  return (
    <LanguageProvider>
      <ThemesProvider>{children}</ThemesProvider>
    </LanguageProvider>
  );
};

export default SettingsContext;
