import type { ChangeEvent } from 'react';
import { useEffect } from 'react';
import { useRef, useState } from 'react';

import { StylizedTextarea } from '../../entities/ControlledTextarea/ControlledTextarea';

import styles from './Textarea.module.css';

interface TextareaProps {
  value: string;
  onChange: (value: string) => void;
}

const Textarea = ({ value, onChange }: TextareaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [caretPosition, setCaretPosition] = useState(0);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.setSelectionRange(caretPosition, caretPosition);
    }
  }, [caretPosition]);

  const handleQueryChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newQuery = event.target.value;
    const caretPos = event.target.selectionStart || 0;
    if (newQuery.charAt(caretPos - 1) === '{' && newQuery.length > value.length) {
      onChange(newQuery.substring(0, caretPos) + '}' + newQuery.substring(caretPos));
      setCaretPosition(caretPos);
    } else {
      onChange(newQuery);
    }
  };

  return (
    <div className={styles.wrapperTextarea}>
      <StylizedTextarea minRows={8} className={styles.textarea} value={value} onChange={handleQueryChange} ref={textareaRef} />
    </div>
  );
};

export default Textarea;
