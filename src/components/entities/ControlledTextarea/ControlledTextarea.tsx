import type { ChangeEvent } from 'react';
import { useState, useEffect, useRef } from 'react';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { useSelector } from 'react-redux';

import { selectRequestData } from '../../../store/slices/requestSlice';
import { useActions } from '../../../hooks/useActions';

import styles from './ControlledTextarea.module.css';

interface ControlledTextareaProps {
  selectedDiv?: string;
}

const ControlledTextarea = ({ selectedDiv }: ControlledTextareaProps) => {
  const query = useSelector(selectRequestData);
  const { updateRequestData } = useActions();
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
      updateRequestData(newQuery.substring(0, caretPos) + '}' + newQuery.substring(caretPos));
      setCaretPosition(caretPos);
    } else {
      updateRequestData(newQuery);
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
