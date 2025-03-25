import { defineFunction } from '@aws-amplify/backend';

export const preSignUp = defineFunction({
  name: 'preSignUp',
  environment:{
    ALLOWED_EMAIL_SUFFIXES: "@hitachids.com"
  }
});