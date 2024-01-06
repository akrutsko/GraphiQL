import styles from '../../entities/Accordion/CustomAccordion.module.css';

interface ControlButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const ControlButton = ({ label, isActive, onClick }: ControlButtonProps) => {
  return (
    <button
      data-testid={`control-${label}`}
      className={`${styles.buttonsControl} ${isActive ? styles.activeButton : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ControlButton;
