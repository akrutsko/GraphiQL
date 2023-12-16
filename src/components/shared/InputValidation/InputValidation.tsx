import type { UseFormRegister } from 'react-hook-form';
import { TextField } from '@mui/material';

import type { InputProps, Validation } from '../../../types';

import styles from './InputValidation.module.css';

interface InputValidationProps extends InputProps {
  error: string | undefined;
  register: UseFormRegister<Validation>;
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
