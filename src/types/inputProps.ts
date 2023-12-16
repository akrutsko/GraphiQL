import type { INPUT_EMAIL, INPUT_PASSWORD, INPUT_TEXT, INPUT_CONFIRM } from '../constants';

export interface InputProps {
  type: typeof INPUT_EMAIL | typeof INPUT_PASSWORD | typeof INPUT_TEXT;
  placeholder: string;
  inputName: typeof INPUT_EMAIL | typeof INPUT_PASSWORD | typeof INPUT_CONFIRM;
}
