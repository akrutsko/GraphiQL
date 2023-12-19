import { object, type InferType } from 'yup';

import type { Schema } from '../../types';

import { createConfirmSchema, createEmailSchema, createPasswordSchema } from './index';

export const createSignUpSchema = (schema: Schema) => {
  return object({
    email: createEmailSchema(schema),
    password: createPasswordSchema(schema),
    confirmPassword: createConfirmSchema(schema),
  });
};

export type SignUpSchema = InferType<ReturnType<typeof createSignUpSchema>>;
