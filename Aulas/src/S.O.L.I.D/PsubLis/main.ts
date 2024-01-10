import { Messaging } from './services/Messaging';
import { Order } from './classes/Order';
import { ShoppingCart } from './classes/ShoppingCart';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { FiftyPercentDiscount } from './classes/Discount';
import { TenPercentDiscount } from './classes/Discount';

const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const shoppingCart = new ShoppingCart(tenPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();

const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('yamaha R3', 33_590.0 + 169.0));
shoppingCart.addItem(new Product('Samsung NEO QLED 50`', 3_989.05));
shoppingCart.addItem(new Product('8bitdo Ultimate', 371.0));
shoppingCart.addItem(new Product('Emma Original Classic', 4_499.0));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
order.checkout();
console.log(order.orderStatus);
