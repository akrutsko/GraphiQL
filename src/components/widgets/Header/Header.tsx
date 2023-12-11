import { Link } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <button className={styles.settings} />
      <div className={styles.buttonsContainer}>
        <Link to={'/sign-in'}>Sign In</Link>
        <Link to={'/sign-up'}>Sign Up</Link>
      </div>
    </header>
  );
};

export default Header;
