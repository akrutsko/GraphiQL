import { type MouseEvent, useState } from 'react';
import { ThemeProvider, ToggleButton, ToggleButtonGroup, Typography, Box } from '@mui/material';

import type { Lang, languageToggleValue, Theme, themeToggleValue } from '../../../types';
import { useLanguageDispatch } from '../../../hooks';
import { LANG_EN, LANG_RU } from '../../../constants';
import { useThemeDispatch } from '../../../hooks/useThemeDispatch.ts';

import { theme } from './SettingsSectionTheme';
import styles from './SettingsSection.module.css';

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
        <Typography sx={{ fontSize: '28px' }} component="div">
          {inner}
          <Typography component="p">{description}</Typography>
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
