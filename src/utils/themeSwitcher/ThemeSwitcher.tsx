import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useMemo, type PropsWithChildren } from 'react';

import { useTheme } from '../../hooks';
import { THEME_DARK } from '../../constants';

const ThemeSwitcher = ({ children }: PropsWithChildren) => {
  const theme = useTheme();

  const selectedTheme = useMemo(() => {
    const mainColor = theme === THEME_DARK ? '#2f2746' : '#e1e0e0';
    const secondaryColor = theme === THEME_DARK ? '#2b2242' : '#e0dede';
    return createTheme({
      breakpoints: {
        values: {
          xs: 0,
          sm: 860,
          md: 1100,
          lg: 1280,
          xl: 1920,
        },
      },
      palette: {
        mode: theme,
        primary: {
          main: mainColor,
        },
        secondary: {
          main: secondaryColor,
        },
        background: {
          default: mainColor,
          paper: mainColor,
        },
      },
      components: {
        MuiAppBar: {
          styleOverrides: {
            root: {
              backgroundImage: 'none',
              boxShadow: 'none',
              backgroundColor: 'transparent',
              transition: 'background-color box-shadow 0.3s',
            },
          },
        },
      },
    });
  }, [theme]);

  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeSwitcher;
