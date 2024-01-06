import { TextField, ThemeProvider } from '@mui/material';
import { type FocusEvent, useState } from 'react';
import { useSelector } from 'react-redux';

import { useActions, useAppSelector, useTranslation } from '../../../hooks';
import { themeInput } from '../../../utils/themeInput/themeInput';
import DocumentationExplorer from '../../features/DocumentationExplorer/DocumentationExplorer';
import { selectEndpoint } from '../../../store/slices/endpointSlice';
import DocumentationButton from '../../entities/DocumentationButton/DocumentationButton';
import { selectDocumentation } from '../../../store/slices/documentationSlice';

import styles from './DocsSection.module.css';

const DocsSection = () => {
  const translation = useTranslation();
  const { updateEndpoint } = useActions();
  const documentationStatus = useAppSelector(selectDocumentation);
  const apiUrl = useSelector(selectEndpoint);
  const [showDocumentation, setShowDocumentation] = useState(false);

  const handleEndpointChange = (event: FocusEvent<HTMLInputElement>) => {
    updateEndpoint(event.target.value);
    setShowDocumentation(false);
  };

  const handleButtonClick = () => {
    setShowDocumentation(!showDocumentation);
  };

  return (
    <div className={styles.docsSection}>
      <div className={styles.docsWrapper}>
        <DocumentationButton showDocumentation={showDocumentation} onclick={handleButtonClick} />
        <ThemeProvider theme={themeInput}>
          {documentationStatus === 'error' ? (
            <TextField
              error
              className={styles.inputEndpoind}
              label={translation.error}
              id="filled-size-small"
              variant="filled"
              size="small"
              color="secondary"
              defaultValue={apiUrl}
              onBlur={handleEndpointChange}
            />
          ) : (
            <TextField
              className={styles.inputEndpoind}
              label={translation.endpoint}
              id="filled-size-small"
              variant="filled"
              size="small"
              color="secondary"
              defaultValue={apiUrl}
              onBlur={handleEndpointChange}
            />
          )}
        </ThemeProvider>
      </div>
      <DocumentationExplorer onclose={() => setShowDocumentation(false)} showDocumentation={showDocumentation} />
    </div>
  );
};

export default DocsSection;
