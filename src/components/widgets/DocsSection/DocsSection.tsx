import { TextField, ThemeProvider } from '@mui/material';
import { useState } from 'react';

import { useTranslation } from '../../../hooks';
import { themeInput } from '../../../utils/themeInput/themeInput';
import DocumentationExplorer from '../../features/DocumentationExplorer/DocumentationExplorer';

import styles from './DocsSection.module.css';

const DocsSection = () => {
  const translation = useTranslation();
  const [showDocumentation, setShowDocumentation] = useState(false);

  return (
    <div className={styles.docsSection}>
      <div className={styles.docsWrapper}>
        <button
          className={showDocumentation ? styles.buttonDocsOpen : styles.buttonDocs}
          onClick={() => setShowDocumentation(!showDocumentation)}
        />
        <ThemeProvider theme={themeInput}>
          <TextField
            className={styles.inputEndpoind}
            label={translation.endpoint}
            id="filled-size-small"
            variant="filled"
            size="small"
            color="secondary"
            defaultValue={'https://swapi-graphql.eskerda.vercel.app/'}
          />
        </ThemeProvider>
      </div>
      <DocumentationExplorer onclose={() => setShowDocumentation(false)} showDocumentation={showDocumentation} />
    </div>
  );
};

export default DocsSection;
