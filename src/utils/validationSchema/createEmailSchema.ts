import { string } from 'yup';

import type { Schema } from '../../types';

export const createEmailSchema = ({ email }: Pick<Schema, 'email'>) => {
  return string()
    .required(email.required)
    .email(email.email)
    .test('email-tld', email.email, (value) => {
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
