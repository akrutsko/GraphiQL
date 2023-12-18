import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import AnimatedInner from '../../shared/AnimatedInner/AnimatedInner';
import { useLanguage, useTranslation } from '../../../hooks';
import { INPUTS_SIGN_UP } from '../../../constants';
import InputValidation from '../../shared/InputValidation/InputValidation';
import { generateValidationSchema } from '../../../utils/validationSchema';

import styles from './SignUp.module.css';

const SignUp = () => {
  const translation = useTranslation();
  const language = useLanguage();
  const validationSchema = generateValidationSchema(language);

  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
    // getValues,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
  });

  const onSubmit = () => {};

  return (
    <>
      <AnimatedInner inner={translation.signup} />
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
        {INPUTS_SIGN_UP.map(({ placeholder, inputName, type }, index) => (
          <InputValidation
            key={placeholder}
            placeholder={translation.placeholders[index]}
            inputName={inputName}
            type={type}
            error={errors[inputName]?.message}
            register={register}
          />
        ))}
        <input className={styles.submit} type="submit" value={translation.submit} />
      </form>
    </>
  );
};

export default SignUp;
