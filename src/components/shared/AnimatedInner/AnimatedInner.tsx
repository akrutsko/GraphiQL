import styles from './AnimatedInner.module.css';

type AnimatedInnerProps = {
  inner: string;
};

const AnimatedInner = ({ inner }: AnimatedInnerProps) => {
  return (
    <h1 className={styles.inner}>
      {inner}
      <span className={styles.underscore}>_</span>
    </h1>
  );
};

export default AnimatedInner;
