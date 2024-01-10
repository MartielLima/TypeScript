import { Messaging } from './services/Messaging';
import { Order } from './classes/Order';
import { ShoppingCart } from './classes/ShoppingCart';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { FiftyPercentDiscount } from './classes/Discount';
import { TenPercentDiscount } from './classes/Discount';
import { EnterpriseCustomer, IndividualCostumer } from './classes/Customers';

const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const shoppingCart = new ShoppingCart(tenPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();

const customerPessoa = new IndividualCostumer('Martiel', 'dos Santos Lima', '86196744550');
const customerEmpresa = new EnterpriseCustomer('Gigapixel', '00000000000191');

const order = new Order(shoppingCart, messaging, persistency, customerPessoa);

shoppingCart.addItem(new Product('yamaha R3', 33_590.0 + 169.0));
shoppingCart.addItem(new Product('Samsung NEO QLED 50`', 3_989.05));
shoppingCart.addItem(new Product('8bitdo Ultimate', 371.0));
shoppingCart.addItem(new Product('Emma Original Classic', 4_499.0));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
order.checkout();
console.log(order.orderStatus);
