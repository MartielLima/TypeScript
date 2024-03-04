import { Customer } from './Interfaces/Customer-Protocol';

export class EnterpriseCustomer implements Customer {
    name: string;
    constructor(nome: string) {
        this.name = nome;
    }
}
