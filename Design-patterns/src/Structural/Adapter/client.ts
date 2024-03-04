import { EmailValidatorFnProtocol, EmailValidatorProtocol } from './validation/email-validator-protocol';
import { EmailValidatorAdapter } from './validation/email-validator-class-adapter';
import { emailValidatorFnAdapter } from './validation/email-validator-fn-adapter';

function validaEmailClass(emailValidator: EmailValidatorProtocol, email: string): void {
    if (emailValidator.isEmail(email)) {
        return console.log('E email, na class');
    }
    console.log('não e um email, na class');
}

function validaEmailFn(emailValidator: EmailValidatorFnProtocol, email: string): void {
    if (emailValidator(email)) {
        return console.log('E email, na function');
    }
    console.log('não e um email, na function');
}

const email = 'martielsl@gmail.com';

validaEmailFn(emailValidatorFnAdapter, email);
validaEmailClass(new EmailValidatorAdapter(), email);
