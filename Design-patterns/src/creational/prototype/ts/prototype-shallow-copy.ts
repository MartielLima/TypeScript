export interface Prototype {
    clone(): Prototype;
}

export class Person implements Prototype {
    public addresses: Address[] = [];

    constructor(
        public name: string,
        public age: number,
    ) {}

    clone(): this {
        const newPerson = Object.create(this);
        return newPerson;
    }

    addAddress(address: Address): void {
        this.addresses.push(address);
    }
}

export class Address {
    constructor(
        public street: string,
        public number: number,
    ) {}
}

const address1 = new Address('Rua quinze', 13);

const person1 = new Person('Martiel', 30);
person1.addAddress(address1);
const person2 = person1.clone();

person2.name = 'Leticia';

console.log(person2.name);
