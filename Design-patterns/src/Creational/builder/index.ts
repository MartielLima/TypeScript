import { MainDishBuilder } from './classes/main-dish-builder';
import { VeganDishBuilder } from './classes/vegan-dish-builder';

const mainDishBuilder = new MainDishBuilder();
const veganDishBuilder = new VeganDishBuilder();

mainDishBuilder.makeMeal().makeBeverage().makeDessert();
veganDishBuilder.makeMeal();

console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());

console.log(veganDishBuilder.getMeal());
console.log(veganDishBuilder.getPrice());
