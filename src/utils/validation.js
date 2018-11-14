import {
  email as emailFormatting,
  maxLength,
  minLength,
  required,
  sameAs,
} from 'vuelidate/lib/validators';

export const form = {
  email: {
    required,
    emailFormatting,
    minLength: minLength(7),
    maxLength: maxLength(32),
  },
  password: {
    required,
    minLength: minLength(8),
    maxLength: maxLength(64),
  },
  confirmPassword: {
    required,
    sameAsPassword: sameAs('password'),
  },
};
