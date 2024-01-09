type Item = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class Legacy {
   private readonly _items: Item[] = [];
   private _orderStatus: OrderStatus = 'open';

   addItem(item: Item): void {
      this._items.push(item);
   }

   removeItem(index: number): void {
      this._items.splice(index, 1);
   }

   total(): number {
      return +this._items
         .reduce((total, item) => {
            return total + item.price;
         }, 0)
         .toFixed(2);
   }

   get orderStatus(): Readonly<OrderStatus> {
      return this._orderStatus;
   }

   get items(): Readonly<Item[]> {
      return this._items;
   }

   checkout(): void {
      if (this.isEmpty()) {
         console.log('Seu carrinho esta vazio!');
         return;
      }

      this._orderStatus = 'closed';
      this.sendMessage(`Seu pedido com o total de R$${this.total()}, foi recebido`);
      this.saveOrder();
      this.clear();
   }

   sendMessage(text: string): void {
      console.log(`msg: ${text}`);
   }

   saveOrder(): void {
      console.log('Pedido efetuado com sucesso');
   }

   clear(): void {
      this._items.length = 0;
   }

   isEmpty(): boolean {
      return this._items.length === 0;
   }
}

const shoppingCart = new Legacy();
shoppingCart.addItem({
   name: 'yamaha R3',
   price: 33_590.0 + 169.0,
});
shoppingCart.addItem({
   name: 'Samsung NEO QLED 50`',
   price: 3_989.05,
});
shoppingCart.addItem({
   name: '8bitdo Ultimate',
   price: 371.0,
});
shoppingCart.addItem({
   name: 'Emma Original Classic',
   price: 4_499.0,
});

console.log(shoppingCart.items);
console.log(shoppingCart.total());
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
