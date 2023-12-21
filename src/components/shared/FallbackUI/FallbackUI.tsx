import { Container } from '@mui/material';

import AnimatedInner from '../AnimatedInner/AnimatedInner';

import styles from './FallbackUI.module.css';

const FallDownUI = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <Container sx={{ minHeight: '100vh' }}>
      <AnimatedInner inner="Something went wrong. Refresh the page, please." />
      <button className={styles.refresh} onClick={handleRefresh}>
        Refresh
      </button>
    </Container>
  );
};

export default FallDownUI;
