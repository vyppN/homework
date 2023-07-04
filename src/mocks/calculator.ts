import {Discountable} from "../internal/port/pricing";
import {Food} from "../internal/domain/food";
import {FoodPrices} from "./datasource";
import {FoodCalculatorService} from "../internal/port/service";

/*
This mock is too complicated, but it's OK for now
 */

export class MockCalculator implements FoodCalculatorService {
    private discount: Discountable
    constructor(discount: Discountable) {
        this.discount = discount
    }
    getPrice(foods: Food[]): number {
        return foods.reduce((sum: number, food: Food) =>  {
            let price = sum + this.discount.calculate(food.foodSet, FoodPrices[food.foodSet], food.amount)
            price = Math.round((price + Number.EPSILON) * 100) * food.amount / 100
            return price
        }, 0)
    }

}