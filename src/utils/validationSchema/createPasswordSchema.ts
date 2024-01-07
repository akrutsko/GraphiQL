import { ref, string } from 'yup';

import type { Schema } from '../../types';

export const createPasswordSchema = ({ password }: Pick<Schema, 'password'>) => {
  return string()
    .required(password.required)
    .matches(/^\S*$/, password.whitespace)
    .matches(/^(?=.*\p{L})[^\s]+$/u, password.letter)
    .matches(/[0-9]/, password.number)
    .matches(/[!"#$%&'()*+,./:;<=>?@^_`{|}~\-\[\]]/, password.symbol)
    .min(8, password.length);
};

export const createConfirmSchema = ({ confirm }: Pick<Schema, 'confirm'>) => {
  return string()
    .required(confirm.required)
    .oneOf([ref('password')], confirm.match);
};
