import { Item } from './interfaces/CartItem';

export class Product implements Item {
   constructor(
      public name: string,
      public price: number,
   ) {}
}
