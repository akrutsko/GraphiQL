import styles from './FullWidthTextarea.module.css';

interface FullWidthTextareaProps {
  selectedDiv?: string;
}

const FullWidthTextarea = ({ selectedDiv }: FullWidthTextareaProps) => {
  return (
    <div className={styles.wrapperTextarea}>
      <textarea className={styles.textarea} placeholder={selectedDiv} />
    </div>
  );
};

export default FullWidthTextarea;
