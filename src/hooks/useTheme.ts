import { useContext } from 'react';

import { Themes } from '../contexts/ThemesContext';

export function useTheme() {
  return useContext(Themes);
}
