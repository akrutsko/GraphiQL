import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

import CustomAccordion from '../../entities/Accordion/CustomAccordion';
import prettifyingService from '../../../services/PrettifyingService';
import { useTranslation, useActions } from '../../../hooks';
import TostifyMessage from '../../shared/TostifyMessage/TostifyMessage';
import TostifyComponent from '../../shared/TostifyComponent/TostifyComponent';
import { selectRequestData } from '../../../store/slices/requestSlice';
import EditorOrViewer from '../../entities/EditorOrViewer/EditorOrViewer';
import createApi from '../../../services/ApiService';
import { selectEndpoint } from '../../../store/slices/endpointSlice';
import HtmlTooltip from '../../shared/HtmlTooltip/HtmlTooltip';
import { selectVariablesData } from '../../../store/slices/variablesSlice';
import { selectHeadersData } from '../../../store/slices/headersSlice';

import styles from './RequestSection.module.css';

const RequestSection = () => {
  const translation = useTranslation();
  const query = useSelector(selectRequestData);
  const variables = useSelector(selectVariablesData);
  const headers = useSelector(selectHeadersData);
  const apiUrl = useSelector(selectEndpoint);
  const { updateResponseData, updateRequestData } = useActions();

  const handleButtonPrettierClick = () => {
    const { prettifyingFailed } = translation.notifications;
    const newQuery = prettifyingService.formatQuery(query, prettifyingFailed);
    if (Array.isArray(newQuery)) {
      toast.error(<TostifyMessage title={prettifyingFailed.title} text={newQuery[0]} />);
    } else {
      updateRequestData(newQuery);
    }
  };

  const handleButtonPlayClick = async () => {
    const { requestFailed } = translation.notifications;
    if (query.trim()) {
      const api = createApi(apiUrl);
      const data = await api.fetchInfo(query, variables, headers);
      if (typeof data === 'object') {
        updateResponseData(JSON.stringify(data, null, 2));
      } else if (data === 'variables') {
        toast.error(<TostifyMessage title={requestFailed.title} text={requestFailed.textVariables} />);
      } else {
        toast.error(<TostifyMessage title={requestFailed.title} text={requestFailed.textHeaders} />);
      }
    }
  };

  return (
    <div className={styles.requestSection}>
      <div className={styles.wrapperButtons}>
        <div className={styles.textarea}>
          <EditorOrViewer readOnly={false} />
        </div>
        <div className={styles.wrapperButtonPlay}>
          <HtmlTooltip title={translation.tooltip.play} placement="right">
            <button className={styles.buttonPlay} onClick={handleButtonPlayClick} />
          </HtmlTooltip>
        </div>
        <HtmlTooltip title={translation.tooltip.prettify} placement="right">
          <button className={styles.buttonPrettier} onClick={handleButtonPrettierClick} />
        </HtmlTooltip>
      </div>
      <CustomAccordion />
      <TostifyComponent />
    </div>
  );
};

export default RequestSection;
