import { LANG_RU } from '../../constants/language';
import { useLanguageDispatch, useTranslation } from '../../hooks';

const Welcome = () => {
  const translation = useTranslation();
  const setLanguage = useLanguageDispatch();

  return <h1 onClick={() => setLanguage(LANG_RU)}>{translation.welcome}</h1>;
};

export default Welcome;
