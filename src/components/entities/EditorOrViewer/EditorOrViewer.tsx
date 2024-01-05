import { useSelector } from 'react-redux';

import { selectResponseData } from '../../../store/slices/responseSlice';
import ControlledTextarea from '../ControlledTextarea/ControlledTextarea';

interface EditorOrViewerProps {
  readOnly: boolean;
}
const EditorOrViewer = ({ readOnly }: EditorOrViewerProps) => {
  const responseData = useSelector(selectResponseData);

  if (readOnly) {
    return (
      <pre data-testid={'code-container'} style={{ overflow: 'auto' }}>
        {responseData}
      </pre>
    );
  } else {
    return <ControlledTextarea />;
  }
};

export default EditorOrViewer;
