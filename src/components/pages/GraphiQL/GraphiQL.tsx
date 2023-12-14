import RequestSection from '../../widgets/RequestSection/RequestSection.tsx';
import DocsSection from '../../widgets/DocsSection/DocsSection.tsx';
import ResponseSection from '../../widgets/ResponseSection/ResponseSection.tsx';

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
