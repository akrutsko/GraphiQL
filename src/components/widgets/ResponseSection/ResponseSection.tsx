import EditorOrViewer from '../../entities/EditorOrViewer/EditorOrViewer';

import styles from './ResponseSection.module.css';

const ResponseSection = () => {
  return (
    <div className={styles.responseSection}>
      <EditorOrViewer readOnly={true} />
    </div>
  );
};

export default ResponseSection;
