export abstract class ValidationComponent {
    abstract validate(value: unknown): boolean;
}

export class ValidateEmail extends ValidationComponent {
    validate(value: unknown): boolean {
        if (typeof value !== 'string') return false;

        return /@/.test(value);
    }
}

export class ValidadeString extends ValidationComponent {
    validate(value: unknown): boolean {
        return typeof value === 'string';
    }
}

export class ValidadeNumber extends ValidationComponent {
    validate(value: unknown): boolean {
        return typeof value === 'number';
    }
}

// Composite
export class ValidationComposite extends ValidationComponent {
    private readonly children: ValidationComponent[] = [];

    add(...validations: ValidationComponent[]) {
        validations.forEach((validation) => this.children.push(validation));
    }

    validate(value: unknown): boolean {
        for (const child of this.children) {
            const validation = child.validate(value);
            if (!validation) return false;
        }

        return true;
    }
}

const validadeEmail = new ValidateEmail();
const validadeString = new ValidadeString();
const validadeNumber = new ValidadeNumber();

const validationComposite = new ValidationComposite();
validationComposite.add(validadeEmail, validadeString);

const email = 'martielsantos13@gmail.com';
const senha = 123456789;

const emailBrolken = 'martiel.gmail.com';

console.log('Is email', validationComposite.validate(email));
