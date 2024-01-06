import { useSelector } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierHeathDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { selectResponseData } from '../../../store/slices/responseSlice';
import ControlledTextarea from '../ControlledTextarea/ControlledTextarea';

interface EditorOrViewerProps {
  readOnly: boolean;
}
const EditorOrViewer = ({ readOnly }: EditorOrViewerProps) => {
  const responseData = useSelector(selectResponseData);

  if (readOnly) {
    return (
      <SyntaxHighlighter customStyle={{ backgroundColor: 'transparent' }} language="json" style={atelierHeathDark}>
        {responseData}
      </SyntaxHighlighter>
    );
  } else {
    return <ControlledTextarea />;
  }
};

export default EditorOrViewer;
