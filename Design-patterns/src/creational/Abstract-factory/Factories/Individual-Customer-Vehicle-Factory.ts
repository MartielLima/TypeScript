import { IndividualCustomer } from '../Customer/Individual-Customer';
import { Customer } from '../Customer/Interfaces/Customer-Protocol';
import { IndividualCar } from '../Vehicle/Individual-Car';
import { Vehicle } from '../Vehicle/Interfaces/Vehicle-Protocol';
import { CreateVehicleCustomer } from './Interfaces/Customer-Vehicle-Factory';

export class IndividualCreateVehicleCustomerFactory implements CreateVehicleCustomer {
    createCustomer(customerName: string): Customer {
        return new IndividualCustomer(customerName);
    }
    createVehicle(vehicleName: string, customerName: string): Vehicle {
        const customer = this.createCustomer(customerName);
        return new IndividualCar(vehicleName, customer);
    }
}
