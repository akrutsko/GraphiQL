import { ref, string } from 'yup';

import type { Schema } from '../../types';

export const createPasswordSchema = ({ password }: Pick<Schema, 'password'>) => {
  return string()
    .required(password.required)
    .matches(/^\S*$/, password.whitespace)
    .matches(/[a-z]/, password.lowercase)
    .matches(/[A-Z]/, password.uppercase)
    .matches(/[0-9]/, password.number)
    .matches(/[!"#$%&'()*+,./:;<=>?@^_`{|}~\-\[\]]/, password.symbol)
    .min(8, password.length);
};

export const createConfirmSchema = ({ confirm }: Pick<Schema, 'confirm'>) => {
  return string()
    .required(confirm.required)
    .oneOf([ref('password')], confirm.match);
};
