import { useSelector } from 'react-redux';

import { useActions } from '../../../hooks';
import { selectVariablesData } from '../../../store/slices/variablesSlice';
import { selectHeadersData } from '../../../store/slices/headersSlice';
import { HEADERS_EDITOR, VARIABLES_EDITOR } from '../../../constants';
import Textarea from '../../shared/Textarea/Textarea';

interface EditorTextareaProps {
  selectedDiv?: string;
}

const EditorTextarea = ({ selectedDiv }: EditorTextareaProps) => {
  const { updateHeaders, updateVariables } = useActions();
  const variables = useSelector(selectVariablesData);
  const headers = useSelector(selectHeadersData);

  const handleTextareaChange = (value: string) => (selectedDiv === HEADERS_EDITOR ? updateHeaders : updateVariables)(value);

  return (
    <>
      {selectedDiv === HEADERS_EDITOR && <Textarea value={headers} onChange={handleTextareaChange} />}
      {selectedDiv === VARIABLES_EDITOR && <Textarea value={variables} onChange={handleTextareaChange} />}
    </>
  );
};

export default EditorTextarea;
