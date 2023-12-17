import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

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
