import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import type { ChangeEvent } from 'react';

import styles from './Textarea.module.css';

interface TextareaProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = ({ value, onChange }: TextareaProps) => {
  return (
    <div className={styles.wrapperTextarea}>
      <TextareaAutosize minRows={8} className={styles.textarea} defaultValue={value} onChange={onChange} />
    </div>
  );
};

export default Textarea;
