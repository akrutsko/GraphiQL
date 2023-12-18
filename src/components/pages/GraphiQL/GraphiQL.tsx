import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

import { auth } from '../../../firebase/firebase';
import DocsSection from '../../widgets/DocsSection/DocsSection';
import RequestSection from '../../widgets/RequestSection/RequestSection';
import ResponseSection from '../../widgets/ResponseSection/ResponseSection';

import styles from './GraphiQL.module.css';

const GraphiQL = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) navigate('/', { replace: true });
  }, [user, loading, navigate]);

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
