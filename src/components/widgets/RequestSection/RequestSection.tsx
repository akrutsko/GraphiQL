import CustomAccordion from '../../entities/Accordion/CustomAccordion.tsx';
import FullWidthTextarea from '../../shared/FullWidthTextarea/FullWidthTextarea.tsx';

import styles from './RequestSection.module.css';

const RequestSection = () => {
  return (
    <div className={styles.requestSection}>
      <div className={styles.wrapperButtons}>
        <div className={styles.textarea}>
          <FullWidthTextarea />
        </div>
        <div className={styles.wrapperButtonPlay}>
          <button className={styles.buttonPlay} />
        </div>
        <button className={styles.buttonPrettier} />
      </div>
      <CustomAccordion />
    </div>
  );
};

export default RequestSection;
