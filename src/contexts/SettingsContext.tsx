import type { PropsWithChildren } from 'react';

import LanguageProvider from './LanguageContext';
import ThemesProvider from './ThemesContext';

const SettingsContext = ({ children }: PropsWithChildren) => {
  return (
    <LanguageProvider>
      <ThemesProvider>{children}</ThemesProvider>
    </LanguageProvider>
  );
};

export default SettingsContext;
