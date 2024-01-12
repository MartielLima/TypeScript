import { Item } from './CartItem';

export interface ShoppingCartProtocol {
   items: Readonly<Item[]>;
   addItem(item: Item): void;
   removeItem(index: number): void;
   total(): number;
   totalWithDiscount(): number;
   clear(): void;
   isEmpty(): boolean;
}
