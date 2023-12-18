import { string } from 'yup';

import type { Schema } from '../../types';

export const createEmailSchema = (schema: Schema) => {
  return string()
    .required(schema.email.required)
    .email(schema.email.email)
    .test('email-tld', schema.email.email, (value) => {
      if (!value) {
        return false;
      }
      const parts = value.split('@');
      if (parts.length !== 2) {
        return false;
      }

      const domain = parts[1].trim();
      const domainParts = domain.split('.');

      return domainParts.length >= 2 && domainParts.every((part) => part.trim() !== '');
    });
};
