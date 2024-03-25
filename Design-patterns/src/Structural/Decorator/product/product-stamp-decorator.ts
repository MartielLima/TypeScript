import { ProductDecorator } from './product-decorator';

// Concrete Decorator
export class ProductStampDecorator extends ProductDecorator {
    getPrice(): number {
        return this.product.getPrice() + 10;
    }

    getName(): string {
        return `${this.product.getName()} (Stamped)`;
    }
}
