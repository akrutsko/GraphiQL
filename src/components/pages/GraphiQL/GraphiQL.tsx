import DocsSection from '../../widgets/DocsSection/DocsSection';
import RequestSection from '../../widgets/RequestSection/RequestSection';
import ResponseSection from '../../widgets/ResponseSection/ResponseSection';

import styles from './GraphiQL.module.css';

const GraphiQL = () => {
  return (
    <div className={styles.mainSection}>
      <DocsSection />
      <div className={styles.wrapper}>
        <RequestSection />
        <ResponseSection />
      </div>
    </div>
  );
};

export default GraphiQL;
