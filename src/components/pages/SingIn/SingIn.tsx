import { yupResolver } from '@hookform/resolvers/yup';
import { FirebaseError } from 'firebase/app';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { INPUTS_SIGN_IN } from '../../../constants';
import { auth } from '../../../firebase/firebase';
import { useTranslation } from '../../../hooks';
import { signInSchema, type SignInSchema } from '../../../utils/signInSchema';
import AnimatedInner from '../../shared/AnimatedInner/AnimatedInner';
import SignInValidation from '../../shared/InputValidation/SignInValidation';

import styles from './SignIn.module.css';

const SingIn = () => {
  const translation = useTranslation();
  const [user, loading] = useAuthState(auth);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
    // getValues,
  } = useForm({
    resolver: yupResolver(signInSchema),
    mode: 'onBlur',
  });

  useEffect(() => {
    if (loading) return;
    if (user) navigate('/main', { replace: true });
  }, [user, loading, navigate]);

  const onSubmit = async (data: SignInSchema) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate('/main');
    } catch (err) {
      if (err instanceof FirebaseError) {
        // TODO: Add react-toastify
        console.log(err);
      }
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
        <input className={styles.submit} type="submit" value={translation.submit} />
      </form>
    </>
  );
};

export default SingIn;
