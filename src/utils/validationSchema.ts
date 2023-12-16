import { object, string, ref } from 'yup';

export const validationSchema = object({
  email: string()
    .required('Email is required')
    .email('Email must be valid (example@mail.com)')
    .test('email-tld', 'Email must be valid (example@mail.com)', (value) => {
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
    }),
  password: string()
    .required('Password is required')
    .matches(/^\S*$/, 'Password must not contain spaces')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[!"#$%&'()*+,./:;<=>?@^_`{|}~\-\[\]]/, 'Password must contain at least one special character')
    .min(8, 'Password must be at least 8 characters'),
  confirmPassword: string()
    .required('Confirm Password is required')
    .oneOf([ref('password')], 'Passwords must match'),
});
