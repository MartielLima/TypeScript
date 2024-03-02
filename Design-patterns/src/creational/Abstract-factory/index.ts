import { EnterpriseCreateVehicleCustomerFactory } from './Factories/Enterprise-Customer-Vehicle-Factory';
import { IndividualCreateVehicleCustomerFactory } from './Factories/Individual-Customer-Vehicle-Factory';

const enterpriseFactory = new EnterpriseCreateVehicleCustomerFactory();
const individualFactory = new IndividualCreateVehicleCustomerFactory();

const car2 = enterpriseFactory.createVehicle('Spin', 'Microsoft');

const car1 = individualFactory.createVehicle('Tracker', 'Martiel dos Santos Lima');

car2.pickUp();
car1.pickUp();
