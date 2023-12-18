import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';

import { auth } from '../../../firebase/firebase';
import { useTranslation } from '../../../hooks';
import SettingsModal from '../SettingsModal/SettingsModal';

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

  const buttons = user ? (
    <button onClick={handleClose}>{translation.signout}</button>
  ) : (
    <>
      <Link to={'/sign-in'}>{translation.signin}</Link>
      <Link to={'/sign-up'}>{translation.signup}</Link>
    </>
  );

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const isSticky = scrollTop >= 30;
    setSticky(isSticky);
  };

  return (
    <>
      <header className={[styles.header, sticky ? styles.isSticky : ''].join(' ')}>
        <Container sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
          <button className={[styles.settings, open ? styles.active : ''].join(' ')} onClick={toggleModal} />

          <div className={styles.buttonsContainer}>{buttons}</div>
        </Container>
      </header>
      <SettingsModal isOpen={open} handleClose={toggleModal} />
    </>
  );
};

export default Header;
