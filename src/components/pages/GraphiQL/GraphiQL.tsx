import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../../../hooks';
import { selectAuth } from '../../../store/slices/userSlice';
import DocsSection from '../../widgets/DocsSection/DocsSection';
import RequestSection from '../../widgets/RequestSection/RequestSection';
import ResponseSection from '../../widgets/ResponseSection/ResponseSection';

import styles from './GraphiQL.module.css';

const GraphiQL = () => {
  const isAuthenticated = useAppSelector(selectAuth);

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

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
