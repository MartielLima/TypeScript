import { MealBox } from './classes/meal-box';
import { Beans, Meat, Rice } from './classes/meals';

const rice = new Rice('Arroz', 5);
const beans = new Beans('Feijão', 10);
const meat = new Meat('Carne', 20);

const meatBox = new MealBox();
meatBox.add(rice, beans, meat);

console.log(meatBox);
console.log(meatBox.getPrice());
