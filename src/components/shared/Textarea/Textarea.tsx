import type { ChangeEvent } from 'react';

import { StylizedTextarea } from '../../entities/ControlledTextarea/ControlledTextarea.tsx';

import styles from './Textarea.module.css';

interface TextareaProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = ({ value, onChange }: TextareaProps) => {
  return (
    <div className={styles.wrapperTextarea}>
      <StylizedTextarea minRows={8} className={styles.textarea} defaultValue={value} onChange={onChange} />
    </div>
  );
};

export default Textarea;
