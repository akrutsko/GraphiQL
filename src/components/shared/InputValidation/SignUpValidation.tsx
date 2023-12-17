import { TextField } from '@mui/material';
import type { UseFormRegister } from 'react-hook-form';

import type { SignUpProps } from '../../../types';
import type { SignUpSchema } from '../../../utils/signUpSchema';

import styles from './InputValidation.module.css';

interface InputValidationProps extends SignUpProps {
  error: string | undefined;
  register: UseFormRegister<SignUpSchema>;
}

const SignUpValidation = ({ placeholder, inputName, type, error, register }: InputValidationProps) => {
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

export default SignUpValidation;
