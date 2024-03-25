import { ProductDecorator } from './product/product-decorator';
import { ProductStampDecorator } from './product/product-stamp-decorator';
import { TShirt } from './product/t-shirt';

const tShirt = new TShirt();
const TShirtWithStamp = new ProductStampDecorator(tShirt);
const TShirtWithStampFrontAndBack = new ProductStampDecorator(TShirtWithStamp);

console.log(tShirt.getPrice());
console.log(TShirtWithStamp.getPrice());
console.log(TShirtWithStampFrontAndBack.getPrice());
