import { useTranslation } from '../../../hooks';
import AnimatedInner from '../../shared/AnimatedInner/AnimatedInner.tsx';

const Welcome = () => {
  const translation = useTranslation();
  // const setLanguage = useLanguageDispatch();

  // <h1 onClick={() => setLanguage(LANG_RU)}>{translation.welcome}</h1>

  return <AnimatedInner inner={translation.welcome} />;
};

export default Welcome;
