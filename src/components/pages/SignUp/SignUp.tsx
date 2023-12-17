import { yupResolver } from '@hookform/resolvers/yup';
import { FirebaseError } from 'firebase/app';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';

import { INPUTS_SIGN_UP } from '../../../constants';
import { auth } from '../../../firebase/firebase';
import { useAppSelector, useTranslation } from '../../../hooks';
import { selectAuth } from '../../../store/slices/userSlice';
import { signUpSchema, type SignUpSchema } from '../../../utils/signUpSchema';
import AnimatedInner from '../../shared/AnimatedInner/AnimatedInner';
import InputValidation from '../../shared/InputValidation/InputValidation';

import styles from './SignUp.module.css';

const SignUp = () => {
  const translation = useTranslation();
  const { isAuthenticated } = useAppSelector(selectAuth);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
    // getValues,
  } = useForm({
    resolver: yupResolver(signUpSchema),
    mode: 'onBlur',
  });

  if (isAuthenticated) {
    return <Navigate to="/graphi-ql" replace />;
  }

  const onSubmit = async (data: SignUpSchema) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
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
