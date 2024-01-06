import { yupResolver } from '@hookform/resolvers/yup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { INPUTS_SIGN_IN } from '../../../constants';
import { auth } from '../../../firebase/firebase';
import { useTranslation } from '../../../hooks';
import { createSignInSchema, type SignInSchema } from '../../../utils/validationSchema';
import AnimatedInner from '../../shared/AnimatedInner/AnimatedInner';
import SignInValidation from '../../shared/InputValidation/SignInValidation';
import TostifyComponent from '../../shared/TostifyComponent/TostifyComponent';
import TostifyMessage from '../../shared/TostifyMessage/TostifyMessage';

import styles from './SignIn.module.css';

const SingIn = () => {
  const translation = useTranslation();
  const validationSchema = createSignInSchema(translation.schema);
  const notify = () => {
    const { title, text } = translation.notifications.signinFailed;
    toast.error(<TostifyMessage title={title} text={text} />);
  };

  const navigate = useNavigate();

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

  const onSubmit = async (data: SignInSchema) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate('/main');
    } catch (err) {
      notify();
    }
  };

  return (
    <>
      <AnimatedInner inner={translation.signin} />
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
        {INPUTS_SIGN_IN.map(({ placeholder, inputName, type }, index) => (
          <SignInValidation
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

export default SingIn;
