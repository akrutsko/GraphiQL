import type { ChangeEvent } from 'react';
import { useSelector } from 'react-redux';

import { useActions } from '../../../hooks/useActions.ts';
import { selectVariablesData } from '../../../store/slices/variablesSlice.ts';
import { selectHeadersData } from '../../../store/slices/headersSlice.ts';
import { HEADERS_EDITOR, VARIABLES_EDITOR } from '../../../constants';
import Textarea from '../../shared/Textarea/Textarea.tsx';

interface EditorTextareaProps {
  selectedDiv?: string;
}

const EditorTextarea = ({ selectedDiv }: EditorTextareaProps) => {
  const { updateHeaders, updateVariables } = useActions();
  const variables = useSelector(selectVariablesData);
  const headers = useSelector(selectHeadersData);
  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (selectedDiv === HEADERS_EDITOR) {
      updateHeaders(event.target.value);
    } else {
      updateVariables(event.target.value);
    }
  };

  return (
    <>
      {selectedDiv === HEADERS_EDITOR && <Textarea value={headers} onChange={handleTextareaChange} />}
      {selectedDiv === VARIABLES_EDITOR && <Textarea value={variables} onChange={handleTextareaChange} />}
    </>
  );
};

export default EditorTextarea;
