import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

const Layout = () => {
  return (
    <ThemeSwitcher>
      <Container sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </Container>
    </ThemeSwitcher>
  );
};

export default Layout;
