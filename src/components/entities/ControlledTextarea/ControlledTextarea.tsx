import type { ChangeEvent } from 'react';
import { useState, useEffect, useRef } from 'react';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';

import styles from './ControlledTextarea.module.css';

interface ControlledTextareaProps {
  selectedDiv?: string;
  query: string;
  setQuery: (newQuery: string) => void;
}

const ControlledTextarea = ({ selectedDiv, query, setQuery }: ControlledTextareaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [caretPosition, setCaretPosition] = useState(1);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.setSelectionRange(caretPosition, caretPosition);
    }
  }, [caretPosition]);

  const handleQueryChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newQuery = event.target.value;
    const caretPos = event.target.selectionStart || 0;
    if (newQuery.charAt(caretPos - 1) === '{' && newQuery.length > query.length) {
      setQuery(newQuery.substring(0, caretPos) + '}' + newQuery.substring(caretPos));
      setCaretPosition(caretPos);
    } else {
      setQuery(newQuery);
    }
  };

  return (
    <div>
      <TextareaAutosize
        minRows={30}
        className={styles.textarea}
        placeholder={selectedDiv}
        value={query}
        onChange={handleQueryChange}
        ref={textareaRef}
      />
    </div>
  );
};

export default ControlledTextarea;
