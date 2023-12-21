import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect, useState } from 'react';

import { auth } from '../../../firebase/firebase';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ThemeSwitcher from '../../../utils/themeSwitcher/ThemeSwitcher';
import Loader from '../../shared/Loader/Loader';

const Layout = () => {
  const [, loading] = useAuthState(auth);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(loading);
  }, [loading]);

  if (isLoading) return <Loader open={isLoading} />;

  return (
    <ThemeSwitcher>
      <Header />
      <Container sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
        <main>
          <Outlet />
        </main>
        <Footer />
      </Container>
    </ThemeSwitcher>
  );
};

export default Layout;
