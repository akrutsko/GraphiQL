import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect, useState } from 'react';

import { auth } from '../../../firebase/firebase';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ThemeSwitcher from '../../../utils/themeSwitcher/ThemeSwitcher';
import LoaderBig from '../../shared/LoaderBig/LoaderBig';
import ErrorBoundary from '../../shared/ErrorBoundary/ErrorBoundary';

const Layout = () => {
  const [, loading] = useAuthState(auth);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(loading);
  }, [loading]);

  if (isLoading) return <LoaderBig open={isLoading} />;

  return (
    <ErrorBoundary>
      <ThemeSwitcher>
        <Header />
        <Container sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
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
