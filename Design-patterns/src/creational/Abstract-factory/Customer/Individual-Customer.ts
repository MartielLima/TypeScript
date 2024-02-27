import { Customer } from './Interfaces/Customer-Protocol';

export class IndividualCustomer implements Customer {
    name: string;
    constructor(nome: string) {
        this.name = nome;
    }
}
