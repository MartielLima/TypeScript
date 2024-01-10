export abstract class Discount {
   protected discount = 0;

   calculate(valor: number): number {
      return valor - valor * (this.discount / 100);
   }
}

export class FiftyPercentDiscount extends Discount {
   protected readonly discount = 50;
}

export class TenPercentDiscount extends Discount {
   protected readonly discount = 10;
}

export class noDiscount extends Discount {}
