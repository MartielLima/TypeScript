import { Messaging } from './services/Messaging';
import { Order } from './entities/Order';
import { ShoppingCart } from './entities/ShoppingCart';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();

const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('yamaha R3', 33_590.0 + 169.0));
shoppingCart.addItem(new Product('Samsung NEO QLED 50`', 3_989.05));
shoppingCart.addItem(new Product('8bitdo Ultimate', 371.0));
shoppingCart.addItem(new Product('Emma Original Classic', 4_499.0));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
order.checkout();
console.log(order.orderStatus);
