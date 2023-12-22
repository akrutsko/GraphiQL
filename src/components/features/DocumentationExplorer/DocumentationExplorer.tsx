import { Drawer } from '@mui/material';
import { lazy, Suspense } from 'react';

import Loading from '../../shared/Loading/Loading';

import styles from './DocumentationExplorer.module.css';

const ListOfDocumentation = lazy(() => import('../../entities/ListOfDocumentation/ListOfDocumentation'));

type DocumentationExplorerProps = {
  showDocumentation: boolean;
  onclose: () => void;
};

const DocumentationExplorer = ({ showDocumentation, onclose }: DocumentationExplorerProps) => {
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={showDocumentation}
      SlideProps={{
        style: {
          position: 'absolute',
          top: '73px',
          left: '15px',
          height: '87%',
        },
      }}
    >
      <div className={styles.wrapper}>
        <button className={styles.close} onClick={onclose} />
        {showDocumentation && (
          <Suspense fallback={<Loading marginTop={'30'} />}>
            <ListOfDocumentation />
          </Suspense>
        )}
      </div>
    </Drawer>
  );
};

export default DocumentationExplorer;
