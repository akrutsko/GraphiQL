import { Box, ThemeProvider, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { useState, type MouseEvent } from 'react';

import { LANG_EN, LANG_RU } from '../../../constants';
import { useLanguageDispatch } from '../../../hooks';
import { useThemeDispatch } from '../../../hooks/useThemeDispatch';
import type { Lang, Theme, languageToggleValue, themeToggleValue } from '../../../types';

import styles from './SettingsSection.module.css';
import { theme } from './SettingsSectionTheme';

type SettingsSectionProps = {
  inner: string;
  description: string;
  alignments: languageToggleValue[] | themeToggleValue[];
  startValue: Theme | Lang;
};

const SettingsSection = ({ inner, description, alignments, startValue }: SettingsSectionProps) => {
  const [alignment, setAlignment] = useState(startValue);

  const setLanguage = useLanguageDispatch();
  const setTheme = useThemeDispatch();

  const changeContext = (value: Theme | Lang) => {
    value === LANG_EN || value === LANG_RU ? setLanguage(value) : setTheme(value);
  };

  const handleChange = (event: MouseEvent<HTMLElement>, newAlignment: Theme | Lang) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      changeContext(newAlignment);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box className={styles.section}>
        <Typography sx={{ fontSize: { xs: '20px', md: '28px' } }} component="div">
          {inner}
          <Typography sx={{ fontSize: { xs: '14px', md: '20px' } }} component="p">
            {description}
          </Typography>
        </Typography>
        <ToggleButtonGroup size="small" value={alignment} exclusive onChange={handleChange} aria-label="Platform">
          {alignments.map((el) => (
            <ToggleButton value={el.value} key={el.value}>
              {el.name}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>
    </ThemeProvider>
  );
};

export default SettingsSection;
