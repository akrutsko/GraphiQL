import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ThemeSwitcher from '../../../utils/themeSwitcher/ThemeSwitcher';

const Layout = () => {
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
