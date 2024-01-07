import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '../../../firebase/firebase';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ThemeSwitcher from '../../../utils/themeSwitcher/ThemeSwitcher';
import LoaderBig from '../../shared/LoaderBig/LoaderBig';
import ErrorBoundary from '../../shared/ErrorBoundary/ErrorBoundary';

const Layout = () => {
  const [, loading] = useAuthState(auth);

  if (loading) return <LoaderBig open={loading} />;

  return (
    <ErrorBoundary>
      <ThemeSwitcher>
        <Header />
        <Container
          sx={{
            minHeight: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            paddingTop: '120px',
          }}
        >
          <main>
            <Outlet />
          </main>
          <Footer />
        </Container>
      </ThemeSwitcher>
    </ErrorBoundary>
  );
};

export default Layout;
