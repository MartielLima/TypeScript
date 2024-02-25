import { Bicycle } from '../vehicle/Bicycle';
import { Vehicle } from '../vehicle/vehicle';
import { VehicleFactory } from './vehicle-factory';

export class BicycleFactory extends VehicleFactory {
    getVehicle(VehicleName: string): Vehicle {
        return new Bicycle(VehicleName);
    }
}
