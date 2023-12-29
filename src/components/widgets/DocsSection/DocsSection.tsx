import { TextField, ThemeProvider } from '@mui/material';
import { type ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';

import { useTranslation } from '../../../hooks';
import { themeInput } from '../../../utils/themeInput/themeInput';
import DocumentationExplorer from '../../features/DocumentationExplorer/DocumentationExplorer';
import { selectEndpoint } from '../../../store/slices/endpointSlice';
import { useActions } from '../../../hooks/useActions';

import styles from './DocsSection.module.css';

const DocsSection = () => {
  const translation = useTranslation();
  const [showDocumentation, setShowDocumentation] = useState(false);
  const apiUrl = useSelector(selectEndpoint);
  const { updateEndpoint } = useActions();

  const handleEndpointChange = (event: ChangeEvent<HTMLInputElement>) => {
    updateEndpoint(event.target.value);
  };

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
            defaultValue={apiUrl}
            onChange={handleEndpointChange}
          />
        </ThemeProvider>
      </div>
      <DocumentationExplorer onclose={() => setShowDocumentation(false)} showDocumentation={showDocumentation} />
    </div>
  );
};

export default DocsSection;
