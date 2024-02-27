import { Customer } from '../../Customer/Interfaces/Customer-Protocol';
import { Vehicle } from '../../Vehicle/Interfaces/Vehicle-Protocol';

export interface CreateVehicleCustomer {
    createCustomer(customerName: string): Customer;
    createVehicle(vehicleName: string, customerName: string): Vehicle;
}
