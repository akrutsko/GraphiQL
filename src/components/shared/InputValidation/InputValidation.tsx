import { TextField } from '@mui/material';
import type { UseFormRegister } from 'react-hook-form';

import type { InputProps } from '../../../types';
import type { SignInSchema } from '../../../utils/signInSchema';
import type { SignUpSchema } from '../../../utils/signUpSchema';

import styles from './InputValidation.module.css';

interface InputValidationProps extends InputProps {
  error: string | undefined;
  register: UseFormRegister<SignInSchema | SignUpSchema>;
}

const InputValidation = ({ placeholder, inputName, type, error, register }: InputValidationProps) => {
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

export default InputValidation;
