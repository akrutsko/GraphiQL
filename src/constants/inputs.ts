import type { InputProps } from '../types';

export const INPUT_EMAIL = 'email';
export const INPUT_PASSWORD = 'password';
export const INPUT_TEXT = 'text';
export const INPUT_CONFIRM = 'confirmPassword';

export const INPUTS_SIGN_IN: InputProps[] = [
  {
    type: 'text',
    placeholder: 'Enter Email',
    inputName: 'email',
  },
  {
    type: 'password',
    placeholder: 'Enter Password',
    inputName: 'password',
  },
];

export const INPUTS_SIGN_UP: InputProps[] = [
  {
    type: 'text',
    placeholder: 'Enter Email',
    inputName: 'email',
  },
  {
    type: 'password',
    placeholder: 'Enter Password',
    inputName: 'password',
  },
  {
    type: 'password',
    placeholder: 'Confirm Password',
    inputName: 'confirmPassword',
  },
];
