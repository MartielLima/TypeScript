import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { MealBox } from './meal-box';
import { Beans, Beverage, Dessert, Rice, Salad } from './meals';

export class VeganDishBuilder implements MealBuilderProtocol {
    private _meal: MealBox = new MealBox();

    makeMeal(): this {
        const rice = new Rice('Arroz', 5);
        const beans = new Beans('Feijão', 5);
        const salad = new Salad('Salada', 3);

        this._meal.add(rice, beans, salad);

        return this;
    }

    makeBeverage(): this {
        const beverage = new Beverage('Vinho', 15);

        this._meal.add(beverage);

        return this;
    }

    makeDessert(): this {
        const dessert = new Dessert('Torta de limão', 14);

        this._meal.add(dessert);

        return this;
    }

    getMeal(): MealBox {
        return this._meal;
    }

    reset(): this {
        this._meal = new MealBox();

        return this;
    }

    getPrice(): number {
        return this._meal.getPrice();
    }
}
