import { TextField } from '@mui/material';
import type { UseFormRegister } from 'react-hook-form';
import { useState } from 'react';

import type { SignUpProps } from '../../../types';
import type { SignUpSchema } from '../../../utils/validationSchema/signUpSchema';
import PasswordInputType from '../PasswordInputType/PasswordInputType';

import styles from './InputValidation.module.css';

interface InputValidationProps extends SignUpProps {
  error: string | undefined;
  register: UseFormRegister<SignUpSchema>;
}

const SignUpValidation = ({ placeholder, inputName, type, error, register }: InputValidationProps) => {
  const [passwordType, setPasswordType] = useState('password');

  const isPasswordType = type === 'password';

  return (
    <div className={styles.container}>
      <TextField
        className={styles.input}
        variant="outlined"
        error={!!error}
        placeholder={placeholder}
        type={isPasswordType ? passwordType : type}
        {...register(inputName)}
      />
      {type === 'password' && <PasswordInputType setPasswordType={setPasswordType} />}
      <span className={styles.error}>{error}</span>
    </div>
  );
};

export default SignUpValidation;
