import AnimatedInner from '../../shared/AnimatedInner/AnimatedInner.tsx';
import { useTranslation } from '../../../hooks';

const SingIn = () => {
  const translation = useTranslation();

  return <AnimatedInner inner={translation.signin} />;
};

export default SingIn;
