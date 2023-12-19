import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import type { PropsWithChildren } from 'react';
import { useMemo } from 'react';

import { useTheme } from '../../hooks';
import { THEME_DARK } from '../../constants';

const ThemeSwitcher = ({ children }: PropsWithChildren) => {
  const theme = useTheme();

  const selectedTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: theme,
          primary: {
            main: theme === THEME_DARK ? '#2f2746' : '#e1e0e0',
          },
          secondary: {
            main: theme === THEME_DARK ? '#2b2242' : '#e0dede',
          },
          background: {
            default: theme === THEME_DARK ? '#2f2746' : '#e1e0e0',
            paper: theme === THEME_DARK ? '#2f2746' : '#e1e0e0',
          },
        },
        components: {
          MuiAppBar: {
            styleOverrides: {
              root: {
                backgroundImage: 'none',
                boxShadow: 'none',
                backgroundColor: 'transparent',
                transition: 'all 0.3s',
              },
            },
          },
        },
      }),
    [theme],
  );

  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeSwitcher;
