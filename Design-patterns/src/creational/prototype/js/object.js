const personPrototype = {
    name: 'Martiel',
    lastName: 'Lima',
    age: 22,

    fullName() {
        return `${this.name} ${this.lastName}`;
    },
};

const anotherPerson = Object.create(personPrototype);

// A chave criada abaixo, faz sombra na chave nome do protótipo, assim soma a chave nome existente no anotherPerson, com a lastName contido no personPrototype

anotherPerson.name = 'Leticia';

console.log(anotherPerson);
console.log(anotherPerson.name);
console.log(anotherPerson.fullName());
