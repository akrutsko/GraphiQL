import { TextField, ThemeProvider } from '@mui/material';
import { type ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';

import { useActions, useTranslation } from '../../../hooks';
import { themeInput } from '../../../utils/themeInput/themeInput';
import DocumentationExplorer from '../../features/DocumentationExplorer/DocumentationExplorer';
import { selectEndpoint } from '../../../store/slices/endpointSlice';
import HtmlTooltip from '../../shared/HtmlTooltip/HtmlTooltip';

import styles from './DocsSection.module.css';

const DocsSection = () => {
  const translation = useTranslation();
  const [showDocumentation, setShowDocumentation] = useState(false);
  const apiUrl = useSelector(selectEndpoint);
  const { updateEndpoint } = useActions();

  const handleEndpointChange = (event: ChangeEvent<HTMLInputElement>) => {
    updateEndpoint(event.target.value);
    setShowDocumentation(false);
  };

  return (
    <div className={styles.docsSection}>
      <div className={styles.docsWrapper}>
        <HtmlTooltip title={translation.tooltip.docs} placement="top">
          <button
            className={showDocumentation ? styles.buttonDocsOpen : styles.buttonDocs}
            onClick={() => setShowDocumentation(!showDocumentation)}
            //disabled={true}
            // TODO: disable docs button if wrong endpoint
          />
        </HtmlTooltip>
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
