import { useTranslation } from '../../../hooks';
import AnimatedInner from '../../shared/AnimatedInner/AnimatedInner.tsx';
import DeveloperCard from '../../shared/DeveloperCard/DeveloperCard.tsx';

import styles from './Welcome.module.css';

const Welcome = () => {
  const translation = useTranslation();
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
