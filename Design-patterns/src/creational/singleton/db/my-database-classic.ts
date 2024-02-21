interface User {
    id: number;
    name: string;
    age: number;
}

export class MyDatabaseClassic {
    private static _instance: MyDatabaseClassic | null = null;
    private _users: User[] = [];

    private constructor() {}

    static get instance(): MyDatabaseClassic {
        if (MyDatabaseClassic._instance === null) {
            MyDatabaseClassic._instance = new MyDatabaseClassic();
        }

        return MyDatabaseClassic._instance;
    }

    add(user: User): void {
        this._users.push(user);
    }

    remove(index: number): User[] {
        return this._users.splice(index, 1);
    }

    show(): void {
        for (const user of this._users) {
            console.log();
        }
    }
}

const instance1 = MyDatabaseClassic.instance;
const instance2 = MyDatabaseClassic.instance;

console.log(instance1 === instance2);
