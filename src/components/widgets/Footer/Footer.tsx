import { useTheme, useTranslation } from '../../../hooks';
import HtmlTooltip from '../../shared/HtmlTooltip/HtmlTooltip';

import styles from './Footer.module.css';

const Footer = () => {
  const translation = useTranslation();
  const theme = useTheme();

  const stylesIcon = {
    filter: theme === 'dark' ? 'invert(100%)' : 'none',
  };

  return (
    <footer data-testid="footer" className={styles.footer}>
      <span> &copy; 2023 - GraphiQL</span>
      <div className={styles.devContainer}>
        {translation.developers.map(({ name, href }) => (
          <HtmlTooltip title={name} placement="top" key={name}>
            <a className={styles.githubLogo} href={href} target="_blank" rel="noreferrer" style={stylesIcon}></a>
          </HtmlTooltip>
        ))}
      </div>
      <a className={styles.rsLogo} href="https://rs.school/react/" target="_blank" rel="noreferrer" style={stylesIcon} />
    </footer>
  );
};

export default Footer;
