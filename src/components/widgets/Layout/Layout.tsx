import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

import Header from '../Header/Header.tsx';
import Footer from '../Footer/Footer.tsx';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher.tsx';

const Layout = () => {
  return (
    <ThemeSwitcher>
      <Container sx={{ position: 'relative', minHeight: '100vh' }}>
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
