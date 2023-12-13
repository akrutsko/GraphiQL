import { useContext } from 'react';

import { Themes } from '../contexts/ThemesContext.tsx';

export function useTheme() {
  return useContext(Themes);
}
