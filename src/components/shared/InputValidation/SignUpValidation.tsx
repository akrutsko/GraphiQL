import { TextField } from '@mui/material';
import type { UseFormRegister } from 'react-hook-form';
import { useState } from 'react';

import type { SignUpProps } from '../../../types';
import type { SignUpSchema } from '../../../utils/validationSchema/signUpSchema';
import PasswodrInputType from '../PasswordInputType/PasswodrInputType';

import styles from './InputValidation.module.css';

interface InputValidationProps extends SignUpProps {
  error: string | undefined;
  register: UseFormRegister<SignUpSchema>;
}

const SignUpValidation = ({ placeholder, inputName, type, error, register }: InputValidationProps) => {
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

export default SignUpValidation;
