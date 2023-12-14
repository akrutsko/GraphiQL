import { useState } from 'react';

import FullWidthTextarea from '../../shared/FullWidthTextarea/FullWidthTextarea.tsx';
import { useTranslation } from '../../../hooks';
import ControlButton from '../../shared/ControlButton/ControlButton.tsx';
import { HEADERS_EDITOR, VARIABLES_EDITOR } from '../../../constants';
import type { Editor } from '../../../types';

import styles from './CustomAccordion.module.css';

const CustomAccordion = () => {
  const translation = useTranslation();
  const [selectedDiv, setSelectedDiv] = useState<Editor>(VARIABLES_EDITOR);
  const [visibleDiv, setVisibleDiv] = useState<boolean>(false);

  const showDiv = (divName: Editor) => {
    setVisibleDiv(true);
    setSelectedDiv(divName);
  };

  const toggleDiv = () => {
    setVisibleDiv(!visibleDiv);
  };

  return (
    <div className={styles.wrapperAccordion}>
      <div className={styles.wrapperGroup}>
        <div>
          <ControlButton
            label={translation.variables}
            isActive={selectedDiv === VARIABLES_EDITOR}
            onClick={() => showDiv(VARIABLES_EDITOR)}
          />
          <ControlButton
            label={translation.headers}
            isActive={selectedDiv === HEADERS_EDITOR}
            onClick={() => showDiv(HEADERS_EDITOR)}
          />
          <button className={`${styles.buttonGroup} ${visibleDiv ? styles.visible : ''}`} onClick={toggleDiv}></button>
        </div>
      </div>
      {visibleDiv && <FullWidthTextarea selectedDiv={selectedDiv} />}
    </div>
  );
};

export default CustomAccordion;
