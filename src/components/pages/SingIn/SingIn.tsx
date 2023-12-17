import { yupResolver } from '@hookform/resolvers/yup';
import { FirebaseError } from 'firebase/app';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';

import { INPUTS_SIGN_IN } from '../../../constants';
import { auth } from '../../../firebase/firebase';
import { useAppSelector, useTranslation } from '../../../hooks';
import { selectAuth } from '../../../store/slices/userSlice';
import { signInSchema, type SignInSchema } from '../../../utils/signInSchema';
import AnimatedInner from '../../shared/AnimatedInner/AnimatedInner';
import InputValidation from '../../shared/InputValidation/InputValidation';

import styles from './SignIn.module.css';

const SingIn = () => {
  const translation = useTranslation();
  const isAuthenticated = useAppSelector(selectAuth);
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

  if (isAuthenticated) {
    return <Navigate to="/graphi-ql" replace />;
  }

  const onSubmit = async (data: SignInSchema) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate('/graphi-ql');
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
