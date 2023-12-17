import { signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
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
  const toggleModal = () => setOpen(!open);
  const [user] = useAuthState(auth);

  const handleClose = () => {
    signOut(auth);
  };

  useEffect(() => {
    if (!user) navigate('/');
  }, [user, navigate]);

  const buttons = user ? (
    <button onClick={handleClose}>{translation.signout}</button>
  ) : (
    <>
      <Link to={'/sign-in'}>{translation.signin}</Link>
      <Link to={'/sign-up'}>{translation.signup}</Link>
    </>
  );

  return (
    <>
      <header className={styles.header}>
        <button className={[styles.settings, open ? styles.active : ''].join(' ')} onClick={toggleModal} />
        <div className={styles.buttonsContainer}>{buttons}</div>
      </header>
      <SettingsModal isOpen={open} handleClose={toggleModal} />
    </>
  );
};

export default Header;
