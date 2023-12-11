import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

import Header from '../Header/Header.tsx';
import Footer from '../Footer/Footer.tsx';

const Layout = () => {
  return (
    <Container sx={{ position: 'relative', minHeight: '100vh' }}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Container>
  );
};

export default Layout;
