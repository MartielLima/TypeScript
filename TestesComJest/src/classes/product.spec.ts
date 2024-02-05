import { Product } from './product';

const createSut = (name: string, price: number): Product => {
   return new Product(name, price);
};

describe('Product', () => {
   afterEach(() => jest.clearAllMocks());

   it('should have properties name and price', () => {
      const sut = createSut('Iphone 15', 6300.99);

      expect(sut).toHaveProperty('name', 'Iphone 15');
      expect(sut.price).toBeCloseTo(6300.99);
   });
});
