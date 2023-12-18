import { Box, Divider, Modal, Typography } from '@mui/material';

import { useLanguage, useTheme, useTranslation } from '../../../hooks';
import SettingsSection from '../../shared/SettingsSection/SettingsSection';

import styles from './SettingsModal.module.css';

type SettingsModalProps = {
  isOpen: boolean;
  handleClose: () => void;
};

const SettingsModal = ({ isOpen, handleClose }: SettingsModalProps) => {
  const translation = useTranslation();
  const language = useLanguage();
  const theme = useTheme();

  return (
    <div>
      <Modal open={isOpen} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box className={styles.modal}>
          <button className={styles.close} onClick={handleClose} />
          <Typography sx={{ padding: '20px' }} variant="h4" component="h4">
            {translation.settings}
          </Typography>
          <Divider sx={{ borderColor: '#ababab' }} />
          <SettingsSection
            startValue={language}
            inner={translation.languageSetting}
            description={translation.languageSettingDescription}
            alignments={translation.languageToggle}
          />
          <Divider sx={{ borderColor: '#ababab' }} />
          <SettingsSection
            startValue={theme}
            inner={translation.themeSetting}
            description={translation.themeSettingDescription}
            alignments={translation.themeToggle}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default SettingsModal;
