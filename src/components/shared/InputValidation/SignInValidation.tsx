import { TextField } from '@mui/material';
import type { UseFormRegister } from 'react-hook-form';
import { useState } from 'react';

import type { SignInProps } from '../../../types';
import type { SignInSchema } from '../../../utils/validationSchema/signInSchema';
import PasswordInputType from '../PasswordInputType/PasswordInputType';

import styles from './InputValidation.module.css';

interface InputValidationProps extends SignInProps {
  error: string | undefined;
  register: UseFormRegister<SignInSchema>;
}

const SignInValidation = ({ placeholder, inputName, type, error, register }: InputValidationProps) => {
  const [passwordType, setPasswordType] = useState('password');

  const isPasswordType = type === 'password';

  return (
    <div className={styles.container}>
      {/*<ThemeProvider theme={themeInput}>*/}
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
      {/*</ThemeProvider>*/}
    </div>
  );
};

export default SignInValidation;
