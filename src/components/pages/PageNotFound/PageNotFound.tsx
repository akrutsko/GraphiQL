import { Link } from 'react-router-dom';

import { useTranslation } from '../../../hooks';
import AnimatedInner from '../../shared/AnimatedInner/AnimatedInner';

import styles from './PageNotFound.module.css';

const PageNotFound = () => {
  const translation = useTranslation();
  return (
    <>
      <AnimatedInner inner={translation['404']} />
      <Link className={styles.link} to={'/'}>
        {translation.gotomain}
      </Link>
    </>
  );
};

export default PageNotFound;
