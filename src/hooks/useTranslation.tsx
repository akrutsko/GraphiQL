import translation from '../data/translation.json';
import type { Lang, Trans } from '../types';

import { useLanguage } from '.';

export function useTranslation() {
  const language = useLanguage();
  return translation[language] as Trans[Lang];
}
