import {Discountable} from "../internal/port/pricing";
import {FoodSet} from "../internal/domain/food";

export class MockDiscount implements Discountable {
    private readonly discount: number

    constructor(discount: number) {
        this.discount = discount
    }

    calculate(foodSet: FoodSet, price: number, amount: number): number {
        return price - this.discount;
    }
}