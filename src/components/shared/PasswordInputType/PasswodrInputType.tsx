import { type Dispatch, type FormEvent, type SetStateAction, useState } from 'react';

import close from '../../../assets/icons/lock-icon.svg';
import open from '../../../assets/icons/lock-open-icon.svg';

import styles from './PasswordInputType.module.css';

type PasswordInputType = {
  setPasswordType: Dispatch<SetStateAction<string>>;
};

const PasswordInputType = ({ setPasswordType }: PasswordInputType) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = (e: FormEvent) => {
    e.preventDefault();
    setIsVisible(!isVisible);
    setPasswordType((prevType) => (prevType === 'password' ? 'text' : 'password'));
  };
  return (
    <button className={styles.visibility} onClick={toggleVisibility}>
      <img className={styles.eye} src={isVisible ? open : close} alt="eye" />
    </button>
  );
};

export default PasswordInputType;
