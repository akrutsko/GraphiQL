import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import AnimatedInner from '../../shared/AnimatedInner/AnimatedInner';
import { useTranslation } from '../../../hooks';
import { INPUTS_SIGN_IN } from '../../../constants';
import InputValidation from '../../shared/InputValidation/InputValidation';
import { validationSchema } from '../../../utils/validationSchema';

import styles from './SignIn.module.css';

const SingIn = () => {
  const translation = useTranslation();

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
      <AnimatedInner inner={translation.signin} />
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
        {INPUTS_SIGN_IN.map(({ placeholder, inputName, type }, index) => (
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

export default SingIn;
