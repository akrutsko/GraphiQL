import { MAX_STRING_LENGTH } from '../../constants';
export const cutWord = (word: string | undefined) => {
  if (!word) return;
  const shortenedName = word.slice(0, MAX_STRING_LENGTH);

  return word.length > MAX_STRING_LENGTH ? shortenedName + '...' : shortenedName;
};
