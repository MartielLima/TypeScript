import { Discount } from './Discount';
import { Item } from './interfaces/CartItem';
import { ShoppingCartProtocol } from './interfaces/shopCartProtocol';

export class ShoppingCart implements ShoppingCartProtocol {
   private readonly _items: Item[] = [];

   constructor(private readonly discount: Discount) {}

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

   totalWithDiscount(): number {
      return this.discount.calculate(this.total());
   }

   get items(): Readonly<Item[]> {
      return this._items;
   }

   clear(): void {
      this._items.length = 0;
   }

   isEmpty(): boolean {
      return this._items.length === 0;
   }
}
