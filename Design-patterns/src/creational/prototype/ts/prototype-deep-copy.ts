// Para implementar o deep copy, foi necessário adicionar em todos os métodos a possibilidade de ser clonavel
export interface Prototype {
    clone(): Prototype;
}

export class Person implements Prototype {
    public addresses: Address[] = [];

    constructor(
        public name: string,
        public age: number,
    ) {}

    clone(): Person {
        // Foi modificado para que quando for requisitado o clone, seja criado um novo objeto do Person conservando os dados, e foi chamado o clone do Address de forma recursiva
        const newPerson = new Person(this.name, this.age);
        newPerson.addresses = this.addresses.map((item) => item.clone());
        return newPerson;
    }

    addAddress(address: Address): void {
        this.addresses.push(address);
    }
}

export class Address implements Prototype {
    constructor(
        public street: string,
        public number: number,
    ) {}

    clone(): Address {
        // Foi criado o método do clone do address
        return new Address(this.street, this.number);
    }
}

const address1 = new Address('Rua quinze', 13);

const person1 = new Person('Martiel', 30);
person1.addAddress(address1);
const person2 = person1.clone();

person2.name = 'Leticia';

console.log(person2.name);

// Como os dados nesse método são conservados, não e necessário que seja pescado todos os dados no banco de dados, porem como tem a necessidade de que seja criado novos objetos pode ser custoso em poder de processamento

// nesse código foi criado as copias de forma manual, porem temos o loadesh.cloneDeep('obj a ser clonado') que faz isso de forma bem mais simples
