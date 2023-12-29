import { Box } from '@mui/material';

import DocsSection from '../../widgets/DocsSection/DocsSection';
import RequestSection from '../../widgets/RequestSection/RequestSection';
import ResponseSection from '../../widgets/ResponseSection/ResponseSection';

import styles from './GraphiQL.module.css';

const GraphiQL = () => {
  return (
    <Box className={styles.mainSection} sx={{ bgcolor: 'primary.contrastText' }}>
      <DocsSection />
      <div className={styles.wrapper}>
        <RequestSection />
        <ResponseSection />
      </div>
    </Box>
  );
};

export default GraphiQL;
