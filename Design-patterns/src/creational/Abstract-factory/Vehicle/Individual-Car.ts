import { Customer } from '../Customer/Interfaces/Customer-Protocol';
import { Vehicle } from './Interfaces/Vehicle-Protocol';

export class IndividualCar implements Vehicle {
    constructor(
        public name: string,
        public customer: Customer,
    ) {}

    pickUp(): void {
        console.log(`${this.name} esta buscando ${this.customer.name}`);
    }
}
