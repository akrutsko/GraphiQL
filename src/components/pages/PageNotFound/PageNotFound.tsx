import { Link } from 'react-router-dom';

import AnimatedInner from '../../shared/AnimatedInner/AnimatedInner.tsx';

import styles from './PageNotFound.module.css';

const PageNotFound = () => {
  return (
    <main>
      <AnimatedInner inner={'Page Not Found'} />
      <Link className={styles.link} to={'/'}>
        Go to Main
      </Link>
    </main>
  );
};

export default PageNotFound;
