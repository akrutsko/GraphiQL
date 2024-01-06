import { yupResolver } from '@hookform/resolvers/yup';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { INPUTS_SIGN_UP } from '../../../constants';
import { auth } from '../../../firebase/firebase';
import { useTranslation } from '../../../hooks';
import { createSignUpSchema, type SignUpSchema } from '../../../utils/validationSchema/signUpSchema';
import AnimatedInner from '../../shared/AnimatedInner/AnimatedInner';
import SignUpValidation from '../../shared/InputValidation/SignUpValidation';
import TostifyComponent from '../../shared/TostifyComponent/TostifyComponent';
import TostifyMessage from '../../shared/TostifyMessage/TostifyMessage';

import styles from './SignUp.module.css';

const SignUp = () => {
  const translation = useTranslation();
  const validationSchema = createSignUpSchema(translation.schema);
  const navigate = useNavigate();

  const notify = () => {
    const { title, text } = translation.notifications.signupFailed;
    toast.error(<TostifyMessage title={title} text={text} />);
  };

  const {
    register,
    handleSubmit,
    trigger,
    formState: { touchedFields, errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
  });

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      Object.keys(touchedFields).forEach((key) => trigger(key as keyof typeof touchedFields));
    }
  }, [translation]);

  const onSubmit = async (data: SignUpSchema) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      navigate('/main');
    } catch (err) {
      notify();
    }
  };

  return (
    <>
      <AnimatedInner inner={translation.signup} />
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
        {INPUTS_SIGN_UP.map(({ placeholder, inputName, type }, index) => (
          <SignUpValidation
            key={placeholder}
            placeholder={translation.placeholders[index]}
            inputName={inputName}
            type={type}
            error={errors[inputName]?.message}
            register={register}
          />
        ))}
        <button className={styles.submit} type="submit">
          {translation.submit}
        </button>
      </form>
      <TostifyComponent />
    </>
  );
};

export default SignUp;
