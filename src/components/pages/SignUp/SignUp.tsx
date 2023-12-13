import AnimatedInner from '../../shared/AnimatedInner/AnimatedInner.tsx';
import { useTranslation } from '../../../hooks';

const SignUp = () => {
  const translation = useTranslation();
  return <AnimatedInner inner={translation.signup} />;
};

export default SignUp;
