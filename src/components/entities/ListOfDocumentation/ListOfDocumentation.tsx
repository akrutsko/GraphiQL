import { Divider } from '@mui/material';

import { useTranslation } from '../../../hooks';
import styles from '../../features/DocumentationExplorer/DocumentationExplorer.module.css';

const ListOfDocumentation = () => {
  const translation = useTranslation();
  return (
    <div>
      <h2 className={styles.title}>{translation.documentationExplorer}</h2>
      <Divider />
    </div>
  );
};

export default ListOfDocumentation;
