import { Link } from 'react-router-dom';

import AnimatedInner from '../../shared/AnimatedInner/AnimatedInner';
import { useTranslation } from '../../../hooks';

import styles from './PageNotFound.module.css';

const PageNotFound = () => {
  const translation = useTranslation();
  return (
    <main>
      <AnimatedInner inner={translation['404']} />
      <Link className={styles.link} to={'/'}>
        {translation.gotomain}
      </Link>
    </main>
  );
};

export default PageNotFound;
