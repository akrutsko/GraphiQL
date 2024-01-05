import { Drawer } from '@mui/material';
import { lazy, Suspense } from 'react';

import LoaderSmall from '../../shared/LoaderSmall/LoaderSmall';

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
      anchor="right"
      open={showDocumentation}
      SlideProps={{
        style: {
          width: '400px',
          position: 'absolute',
          zIndex: 100,
          maxHeight: 'fit-content',
          height: '100%',
          boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0 6px 6px',
          overflowX: 'hidden',
        },
      }}
    >
      <div className={styles.wrapper}>
        <button className={styles.close} onClick={onclose} />
        <Suspense fallback={<LoaderSmall marginTop={'30'} />}>
          <ListOfDocumentation />
        </Suspense>
      </div>
    </Drawer>
  );
};

export default DocumentationExplorer;
