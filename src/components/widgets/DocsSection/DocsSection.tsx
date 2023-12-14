import { TextField, ThemeProvider } from '@mui/material';

import { useTranslation } from '../../../hooks';
import { themeInput } from '../../../utils/themeInput/themeInput.ts';

import styles from './DocsSection.module.css';

const DocsSection = () => {
  const translation = useTranslation();
  return (
    <div className={styles.docsSection}>
      <button className={styles.buttonDocs} />
      <ThemeProvider theme={themeInput}>
        <TextField
          className={styles.inputEndpoind}
          label={translation.endpoint}
          id="filled-size-small"
          variant="filled"
          size="small"
          color="secondary"
        />
      </ThemeProvider>
    </div>
  );
};

export default DocsSection;
