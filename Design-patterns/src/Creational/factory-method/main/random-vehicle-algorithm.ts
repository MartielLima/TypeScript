import { CarFactory } from '../factories/car-factory';
import { Vehicle } from '../vehicle/vehicle';
import { BicycleFactory } from '../factories/bicycle-factory';
import { randomNumbers } from '../utils/random-numbers';

export function randomCarAlgorithm(): Vehicle {
    const carfactory = new CarFactory();
    const bicycleFactory = new BicycleFactory();

    const car1 = carfactory.getVehicle('Rampage');
    const car2 = carfactory.getVehicle('Corola');
    const car3 = carfactory.getVehicle('Tracker');
    const car4 = carfactory.getVehicle('Jetta');
    const bicycle = bicycleFactory.getVehicle('GTSM1');

    const vehicle = [car1, car2, car3, car4, bicycle];

    return vehicle[randomNumbers(vehicle.length)];
}
