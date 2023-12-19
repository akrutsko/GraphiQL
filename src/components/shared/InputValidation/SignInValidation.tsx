import { TextField } from '@mui/material';
import type { UseFormRegister } from 'react-hook-form';
import { useState } from 'react';

import type { SignInProps } from '../../../types';
import type { SignInSchema } from '../../../utils/validationSchema/signInSchema';
import PasswodrInputType from '../PasswordInputType/PasswordInputType.tsx';

import styles from './InputValidation.module.css';

interface InputValidationProps extends SignInProps {
  error: string | undefined;
  register: UseFormRegister<SignInSchema>;
}

const SignInValidation = ({ placeholder, inputName, type, error, register }: InputValidationProps) => {
  const [passwordType, setPasswordType] = useState('password');
  return (
    <div className={styles.container}>
      {/*<ThemeProvider theme={themeInput}>*/}
      <TextField
        className={styles.input}
        variant="outlined"
        error={!!error}
        placeholder={placeholder}
        type={type === 'password' ? passwordType : type}
        {...register(inputName)}
      />
      {type === 'password' && <PasswodrInputType setPasswordType={setPasswordType} />}
      <span className={styles.error}>{error}</span>
      {/*</ThemeProvider>*/}
    </div>
  );
};

export default SignInValidation;
