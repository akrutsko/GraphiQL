import { useTranslation } from '../../../hooks';

import styles from './Footer.module.css';

const Footer = () => {
  const translation = useTranslation();
  return (
    <footer className={styles.footer}>
      <span> &copy; 2023 - GraphiQL</span>
      <div className={styles.devContainer}>
        {translation.developers.map(({ name, href }) => (
          <a key={name} href={href} target="_blank" rel="noreferrer">
            {name}
          </a>
        ))}
      </div>
      <a className={styles.rsLogo} href="https://rs.school/react/" target="_blank" rel="noreferrer" />
    </footer>
  );
};

export default Footer;
