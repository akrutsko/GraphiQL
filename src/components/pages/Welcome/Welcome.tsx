import { useTranslation } from '../../../hooks';
import AnimatedInner from '../../shared/AnimatedInner/AnimatedInner.tsx';

const Welcome = () => {
  const translation = useTranslation();
  return <AnimatedInner inner={translation.welcome} />;
};

export default Welcome;
