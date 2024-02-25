import { Car } from '../vehicle/Car';
import { Vehicle } from '../vehicle/vehicle';
import { VehicleFactory } from './vehicle-factory';

export class CarFactory extends VehicleFactory {
    getVehicle(VehicleName: string): Vehicle {
        return new Car(VehicleName);
    }
}
