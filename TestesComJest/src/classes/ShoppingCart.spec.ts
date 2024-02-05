import { ShoppingCart } from './ShoppingCart';
import { Discount } from './Discount';
import { Item } from './interfaces/CartItem';

const createSut = (): { sut: ShoppingCart; discountMock: Discount } => {
   const discountMock = createDiscountMock();
   const sut = new ShoppingCart(discountMock);
   return { sut, discountMock };
};

const createDiscountMock = (): Discount => {
   class DiscountMock extends Discount {
      protected readonly discount = 10;
   }
   return new DiscountMock();
};

const createCartItem = (name: string, price: number) => {
   class CartItemMock implements Item {
      constructor(
         public name: string,
         public price: number,
      ) {}
   }

   return new CartItemMock(name, price);
};

const crateSutWithProducts = (): { sut: ShoppingCart; discountMock: Discount } => {
   const { sut, discountMock } = createSut();

   const cartItem1 = createCartItem('Iphone', 6000);
   const cartItem2 = createCartItem('Apple Watch', 2000);

   sut.addItem(cartItem1);
   sut.addItem(cartItem2);

   return { sut, discountMock };
};

describe('ShoppingCart', () => {
   afterEach(() => jest.clearAllMocks());

   it('should be an empty cart when no product is added', () => {
      const { sut } = createSut();
      expect(sut.isEmpty()).toBeTruthy();
   });

   it('should add to cart, 2 items', () => {
      const { sut } = crateSutWithProducts();

      expect(sut.items.length).toBe(2);
   });

   it('should test total and totalWithDiscount', () => {
      const { sut } = crateSutWithProducts();

      expect(sut.total()).toBe(8000);
      expect(sut.totalWithDiscount()).toBe(7200);
   });

   it('should return clear cart', () => {
      const { sut } = crateSutWithProducts();

      sut.clear();

      expect(sut.isEmpty()).toBeTruthy();
   });

   it('should remove a item from the cart', () => {
      const { sut } = crateSutWithProducts();

      sut.removeItem(0);

      expect(sut.total()).toBe(2000);
      expect(sut.items.length).toBe(1);
   });
});
