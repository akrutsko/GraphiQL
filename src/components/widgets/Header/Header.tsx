import { useEffect, useState } from 'react';
import { AppBar, Box, Container, Toolbar } from '@mui/material';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';

import { auth } from '../../../firebase/firebase';
import { useTranslation } from '../../../hooks';
import SettingsModal from '../SettingsModal/SettingsModal';
import { SCROLL_DOWN } from '../../../constants';
import type { HeaderButton } from '../../../types';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import NavigationButton from '../../shared/NavigationButton/NavigationButton';

import styles from './Header.module.css';

const Header = () => {
  const translation = useTranslation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggleModal = () => setOpen(!open);
  const [user, loading] = useAuthState(auth);

  const handleClose = () => {
    signOut(auth);
  };

  useEffect(() => {
    if (loading) return;
    if (!user) navigate('/');
  }, [user, loading, navigate]);

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, []);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const isSticky = scrollTop >= SCROLL_DOWN;
    setSticky(isSticky);
  };

  const buttons: HeaderButton[] = user
    ? [
        {
          value: 'GraphiQL',
          to: '/main',
        },
        {
          value: translation.signout,
          func: handleClose,
        },
      ]
    : [
        {
          value: translation.signin,
          to: '/sign-in',
        },
        {
          value: translation.signup,
          to: '/sign-up',
        },
      ];

  return (
    <>
      <AppBar className={styles.header} sx={{ bgcolor: sticky ? 'secondary.main' : 'none', boxShadow: sticky ? 2 : 'none' }}>
        <Container sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <Link className={styles.welcome} to={'/'} />
            <button className={[styles.settings, open ? styles.active : ''].join(' ')} onClick={toggleModal} />
          </Box>
          <Toolbar className={styles.buttonsContainer} sx={{ display: { xs: 'none', sm: 'flex' } }}>
            {buttons.map(({ value, to, func }) => (
              <NavigationButton key={value} value={value} to={to} func={func} />
            ))}
          </Toolbar>
          <BurgerMenu buttons={buttons} />
        </Container>
      </AppBar>
      <SettingsModal isOpen={open} handleClose={toggleModal} />
    </>
  );
};

export default Header;
