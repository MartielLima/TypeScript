import { Messaging } from '../services/Messaging';
import { ShoppingCart } from './ShoppingCart';
import { OrderStatus } from './interfaces/OrderStatus';
import { Persistency } from '../services/persistency';
import { CustomerOrder } from './interfaces/customer-protocol';

export class Order {
   private _orderStatus: OrderStatus = 'open';

   constructor(
      private readonly shoppingCart: ShoppingCart,
      private readonly messaging: Messaging,
      private readonly persistency: Persistency,
      private readonly customer: CustomerOrder,
   ) {}

   get orderStatus(): Readonly<OrderStatus> {
      return this._orderStatus;
   }

   checkout(): void {
      if (this.shoppingCart.isEmpty()) {
         console.log('Seu carrinho esta vazio!');
         return;
      }

      this._orderStatus = 'closed';
      this.messaging.sendMessage(`Seu pedido com o total de R$${this.shoppingCart.totalWithDiscount()}, foi recebido`);
      this.persistency.saveOrder();
      this.shoppingCart.clear();

      console.log('O cliente é:', this.customer.getName(), this.customer.getIDN());
   }
}
