import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';

import SettingsModal from '../SettingsModal/SettingsModal.tsx';
import { useTranslation } from '../../../hooks';

import styles from './Header.module.css';

const Header = () => {
  const translation = useTranslation();
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggleModal = () => setOpen(!open);

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
          <div className={styles.buttonsContainer}>
            <Link to={'/'}>Main</Link>
            <Link to={'/sign-in'}>{translation.signin}</Link>
            <Link to={'/sign-up'}>{translation.signup}</Link>
          </div>
        </Container>
      </header>
      <SettingsModal isOpen={open} handleClose={toggleModal} />
    </>
  );
};

export default Header;
