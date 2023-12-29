import { useSelector } from 'react-redux';

import { selectResponseData } from '../../../store/slices/responseSlice';

import styles from './ResponseSection.module.css';

const ResponseSection = () => {
  const responseData = useSelector(selectResponseData);

  return (
    <div className={styles.responseSection}>
      <pre>{responseData}</pre>
    </div>
  );
};

export default ResponseSection;
