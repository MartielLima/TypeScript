import { EmailValidatorFnProtocol } from './email-validator-protocol';
import isEmail from 'validator/lib/isEmail';

export const emailValidatorFnAdapter: EmailValidatorFnProtocol = (email: string): boolean => {
    return isEmail(email);
};
