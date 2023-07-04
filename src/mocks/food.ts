import {FoodRepository} from "../internal/port/repository";
import {Food} from "../internal/domain/food";
import {Discountable} from "../internal/port/pricing";

/*
Mock it for easy testing
 */

export class MockFoodRepository implements FoodRepository {
    private readonly price: number
    private readonly discount?: Discountable

    constructor(price: number, discount?: Discountable) {
        this.price = price
        this.discount = discount
    }
    getPrice(food: Food): number {
        if(this.discount) return this.discount.calculate(food.foodSet,this.price,food.amount)
        return this.price;
    }
}