import { useAppSelector, useTranslation } from '../../../hooks';
import AnimatedInner from '../../shared/AnimatedInner/AnimatedInner';
import DeveloperCard from '../../shared/DeveloperCard/DeveloperCard';
import type { HeaderButton } from '../../../types';
import { selectAuth } from '../../../store/slices/userSlice';
import NavigationButton from '../../shared/NavigationButton/NavigationButton.tsx';

import styles from './Welcome.module.css';

const Welcome = () => {
  const translation = useTranslation();
  const { isAuthenticated } = useAppSelector(selectAuth);

  const buttons: HeaderButton[] = isAuthenticated
    ? [
        {
          value: 'GraphiQL',
          to: '/main',
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
    <div className={styles.main}>
      <AnimatedInner inner={translation.welcome} />
      <div className={styles.sectionInfo}>
        {translation.projectInfo.map((name, index) => (
          <p className={styles.text} key={index}>
            {name}
          </p>
        ))}
      </div>
      <div>
        {' '}
        {buttons.map(({ value, to, func }) => (
          <NavigationButton key={value} value={value} to={to} func={func} />
        ))}
      </div>
      <div className={styles.sectionDevelopers}>
        <h2 className={styles.sectionDevelopersTitle}>{translation.applicationDevelopers}</h2>
        <div className={styles.sectionDevelopersContext}>
          {translation.developers.map(({ name, description, image }) => (
            <DeveloperCard key={name} image={image} title={name} text={description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
