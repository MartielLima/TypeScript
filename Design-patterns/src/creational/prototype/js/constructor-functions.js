const personPrototype = {
    name: 'Martiel',
    lastName: 'Lima',
    age: 22,

    fullName() {
        return `${this.name} ${this.lastName}`;
    },
};

function Person(name, lastName, age) {
    // Função construtora
    this.name = name;
    this.lastName = lastName;
    this.age = age;
}

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

function SubPerson(name, lastName, age) {
    // herdando com função construtoras
    Person.call(this, name, lastName, age); // Pegando da classe Person como herança

    this.fromSubClass = 'Oi';
}

SubPerson.prototype = Object.create(Person.prototype);
SubPerson.prototype.constructor = SubPerson;

const person1 = new Person('Martiel', 'Santos Lima', 22);
const person2 = new SubPerson('Leticia', 'Lima', 17);

console.log(person1.fullName());
console.log(person2.fromSubClass);
