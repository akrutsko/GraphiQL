const maxLength = 25;
export const cutWord = (word: string | undefined) => {
  if (!word) return;
  const shortenedName = word.slice(0, maxLength);

  return word.length > maxLength ? shortenedName + '...' : shortenedName;
};
