import LoaderSmall from '../../shared/LoaderSmall/LoaderSmall';
import HtmlTooltip from '../../shared/HtmlTooltip/HtmlTooltip';
import styles from '../../widgets/DocsSection/DocsSection.module.css';
import { useAppSelector, useTranslation } from '../../../hooks';
import { selectDocumentation } from '../../../store/slices/documentationSlice';

interface DocumentationButtonProps {
  showDocumentation: boolean;
  onclick: () => void;
}

const DocumentationButton = ({ showDocumentation, onclick }: DocumentationButtonProps) => {
  const translation = useTranslation();
  const documentationStatus = useAppSelector(selectDocumentation);

  return (
    <>
      {documentationStatus === 'loading' && <LoaderSmall marginTopBottom={'0'} marginLeftRight={'5'} />}
      {documentationStatus === 'loaded' && (
        <HtmlTooltip title={translation.tooltip.docs} placement="top">
          <button className={showDocumentation ? styles.buttonDocsOpen : styles.buttonDocs} onClick={onclick} />
        </HtmlTooltip>
      )}
      {documentationStatus === 'error' && (
        <button className={showDocumentation ? styles.buttonDocsOpen : styles.buttonDocs} onClick={onclick} disabled={true} />
      )}
    </>
  );
};

export default DocumentationButton;
