import { object, type InferType } from 'yup';

import type { Schema } from '../../types';

import { createEmailSchema, createPasswordSchema } from './index';

export const createSignInSchema = (schema: Schema) => {
  return object({
    email: createEmailSchema(schema),
    password: createPasswordSchema(schema),
  });
};

export type SignInSchema = InferType<ReturnType<typeof createSignInSchema>>;
