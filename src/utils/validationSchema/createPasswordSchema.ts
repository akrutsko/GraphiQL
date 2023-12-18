import { ref, string } from 'yup';

import type { Schema } from '../../types';

export const createPasswordSchema = (schema: Schema) => {
  return string()
    .required(schema.password.required)
    .matches(/^\S*$/, schema.password.whitespace)
    .matches(/[a-z]/, schema.password.lowercase)
    .matches(/[A-Z]/, schema.password.uppercase)
    .matches(/[0-9]/, schema.password.number)
    .matches(/[!"#$%&'()*+,./:;<=>?@^_`{|}~\-\[\]]/, schema.password.symbol)
    .min(8, schema.password.length);
};

export const createConfirmSchema = (schema: Schema) => {
  return string()
    .required(schema.confirm.required)
    .oneOf([ref('password')], schema.confirm.match);
};
