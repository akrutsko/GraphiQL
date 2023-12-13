import { useState } from 'react';
import { Link } from 'react-router-dom';

import SettingsModal from '../SettingsModal/SettingsModal.tsx';
import { useTranslation } from '../../../hooks';

import styles from './Header.module.css';

const Header = () => {
  const translation = useTranslation();
  const [open, setOpen] = useState(false);
  const toggleModal = () => setOpen(!open);

  return (
    <>
      <header className={styles.header}>
        <button className={[styles.settings, open ? styles.active : ''].join(' ')} onClick={toggleModal} />
        <div className={styles.buttonsContainer}>
          <Link to={'/sign-in'}>{translation.signin}</Link>
          <Link to={'/sign-up'}>{translation.signup}</Link>
        </div>
      </header>
      <SettingsModal isOpen={open} handleClose={toggleModal} />
    </>
  );
};

export default Header;
