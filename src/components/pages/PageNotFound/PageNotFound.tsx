import { Link } from 'react-router-dom';
import { Container } from '@mui/material';

import { useTranslation } from '../../../hooks';
import AnimatedInner from '../../shared/AnimatedInner/AnimatedInner';
import ThemeSwitcher from '../../../utils/themeSwitcher/ThemeSwitcher';
import Header from '../../widgets/Header/Header';
import Footer from '../../widgets/Footer/Footer';

import styles from './PageNotFound.module.css';

const PageNotFound = () => {
  const translation = useTranslation();
  return (
    <ThemeSwitcher>
      <Header />
      <Container sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
        <main>
          <AnimatedInner inner={translation['404']} />
          <Link className={styles.link} to={'/'}>
            {translation.gotomain}
          </Link>
        </main>
        <Footer />
      </Container>
    </ThemeSwitcher>
  );
};

export default PageNotFound;
