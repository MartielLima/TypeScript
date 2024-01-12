import { OrderStatus } from './interfaces/OrderStatus';
import { CustomerOrder } from './interfaces/customer-protocol';
import { ShoppingCartProtocol } from './interfaces/shopCartProtocol';
import { MessagingProtocol } from './interfaces/messagingProtocol';
import { PersistencyProtocol } from './interfaces/PersistencyProtocol';

export class Order {
   private _orderStatus: OrderStatus = 'open';

   constructor(
      private readonly shoppingCart: ShoppingCartProtocol,
      private readonly messaging: MessagingProtocol,
      private readonly persistency: PersistencyProtocol,
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
