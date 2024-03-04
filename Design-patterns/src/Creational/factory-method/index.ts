import { randomCarAlgorithm } from './main/random-vehicle-algorithm';
import { randomNumbers } from './utils/random-numbers';

const customerNames = ['Laiz', 'Leticia', 'Martiel', 'Julia', 'Suzana'];

for (let i = 0; i < 100; i++) {
    const vehicle = randomCarAlgorithm();
    const name = customerNames[randomNumbers(customerNames.length)];

    vehicle.pickUp(name);
    vehicle.stop();
    console.log('---');
}
