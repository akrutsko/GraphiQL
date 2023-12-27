import { TextareaAutosize } from '@mui/base/TextareaAutosize';

import styles from './Textarea.module.css';

interface TextareaProps {
  selectedDiv?: string;
}

const Textarea = ({ selectedDiv }: TextareaProps) => {
  return (
    <div className={styles.wrapperTextarea}>
      <TextareaAutosize minRows={8} className={styles.textarea} placeholder={selectedDiv} />
    </div>
  );
};

export default Textarea;
