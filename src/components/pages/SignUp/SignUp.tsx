import { yupResolver } from '@hookform/resolvers/yup';
import { FirebaseError } from 'firebase/app';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { INPUTS_SIGN_UP } from '../../../constants';
import { auth } from '../../../firebase/firebase';
import { useTranslation } from '../../../hooks';
import { signUpSchema, type SignUpSchema } from '../../../utils/signUpSchema';
import AnimatedInner from '../../shared/AnimatedInner/AnimatedInner';
import SignUpValidation from '../../shared/InputValidation/SignUpValidation';

import styles from './SignUp.module.css';

const SignUp = () => {
  const translation = useTranslation();
  // const language = useLanguage();
  // const validationSchema = generateValidationSchema(language);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
    mode: 'onBlur',
  });

  useEffect(() => {
    if (loading) return;
    if (user) navigate('/main', { replace: true });
  }, [user, loading, navigate]);

  const onSubmit = async (data: SignUpSchema) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
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
        <input className={styles.submit} type="submit" value={translation.submit} />
      </form>
    </>
  );
};

export default SignUp;
