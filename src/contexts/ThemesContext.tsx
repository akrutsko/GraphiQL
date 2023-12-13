import { createContext, useState, type Dispatch, type PropsWithChildren, type SetStateAction } from 'react';

import { THEME_DARK } from '../constants';
import type { Theme } from '../types';

export const Themes = createContext<Theme>(THEME_DARK);
export const ThemeDispatchContext = createContext<Dispatch<SetStateAction<Theme>> | null>(null);

const ThemesProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>(THEME_DARK);

  return (
    <Themes.Provider value={theme}>
      <ThemeDispatchContext.Provider value={setTheme}>{children}</ThemeDispatchContext.Provider>
    </Themes.Provider>
  );
};

export default ThemesProvider;
