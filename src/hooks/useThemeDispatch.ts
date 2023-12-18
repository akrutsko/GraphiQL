import { useContext } from 'react';

import { ThemeDispatchContext } from '../contexts/ThemesContext';

export function useThemeDispatch() {
  const setTheme = useContext(ThemeDispatchContext);

  if (!setTheme) {
    throw new Error('useSearchDispatch has to be used within <ThemeDispatchContext.Provider>');
  }

  return setTheme;
}
