import { EnterpriseCustomer } from '../Customer/Enterprise-Customer';
import { Customer } from '../Customer/Interfaces/Customer-Protocol';
import { EnterpriseCar } from '../Vehicle/Enterprise-Car';
import { Vehicle } from '../Vehicle/Interfaces/Vehicle-Protocol';
import { CreateVehicleCustomer } from './Interfaces/Customer-Vehicle-Factory';

export class EnterpriseCreateVehicleCustomerFactory implements CreateVehicleCustomer {
    createCustomer(customerName: string): Customer {
        return new EnterpriseCustomer(customerName);
    }
    createVehicle(vehicleName: string, customerName: string): Vehicle {
        const customer = this.createCustomer(customerName);
        return new EnterpriseCar(vehicleName, customer);
    }
}
