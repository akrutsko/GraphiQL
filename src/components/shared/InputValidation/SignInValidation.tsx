import { TextField } from '@mui/material';
import type { UseFormRegister } from 'react-hook-form';

import type { SignInProps } from '../../../types';
import type { SignInSchema } from '../../../utils/signInSchema';

import styles from './InputValidation.module.css';

interface InputValidationProps extends SignInProps {
  error: string | undefined;
  register: UseFormRegister<SignInSchema>;
}

const SignInValidation = ({ placeholder, inputName, type, error, register }: InputValidationProps) => {
  return (
    <div className={styles.container}>
      {/*<ThemeProvider theme={themeInput}>*/}
      <TextField
        className={styles.input}
        variant="outlined"
        error={!!error}
        placeholder={placeholder}
        type={type}
        {...register(inputName)}
      />
      <span className={styles.error}>{error}</span>
      {/*</ThemeProvider>*/}
    </div>
  );
};

export default SignInValidation;
