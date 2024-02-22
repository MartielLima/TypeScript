import { MealBox } from './classes/meal-box';
import { Beans, Meat, Rice, Salad } from './classes/meals';

const rice = new Rice('Arroz', 15);
const beans = new Beans('Feijão', 10);
const meat = new Meat('Carne', 20);
const salad = new Salad('Salada', 5);

const meatBox = new MealBox();
meatBox.add(rice, beans, meat, salad);

console.log(meatBox);
console.log(meatBox.getPrice());
