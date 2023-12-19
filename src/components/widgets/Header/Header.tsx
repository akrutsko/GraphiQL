import { useEffect, useState } from 'react';
import { AppBar, Container, Toolbar } from '@mui/material';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from 'react-router-dom';

import { auth } from '../../../firebase/firebase';
import { useTranslation } from '../../../hooks';
import SettingsModal from '../SettingsModal/SettingsModal';
import { SCROLL_DOWN } from '../../../constants';
import type { HeaderButton } from '../../../types';

import styles from './Header.module.css';
import BurgerMenu from './BurgerMenu/BurgerMenu.tsx';

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

  const buttons: HeaderButton[] = user
    ? [
        {
          value: translation.signout,
          to: '/',
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

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const isSticky = scrollTop >= SCROLL_DOWN;
    setSticky(isSticky);
  };

  return (
    <>
      <AppBar className={styles.header} sx={{ bgcolor: sticky ? 'secondary.main' : 'none', boxShadow: sticky ? 2 : 'none' }}>
        <Container sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
          <button className={[styles.settings, open ? styles.active : ''].join(' ')} onClick={toggleModal} />
          <Toolbar className={styles.buttonsContainer} sx={{ display: { xs: 'none', sm: 'flex' } }}>
            {buttons.map(({ value, to, func }) => (
              <NavLink key={to} to={to} onClick={func}>
                {value}
              </NavLink>
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
