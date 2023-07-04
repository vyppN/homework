import {Discountable} from "../internal/port/pricing";
import {FoodSet} from "../internal/domain/food";

export class Membership implements Discountable {
    private readonly discountPercent: number
    constructor(discountPercent: number) {
        this.discountPercent = discountPercent
    }
    calculate(foodSet: FoodSet, price: number, amount: number): number {
        return price - (price * (this.discountPercent / 100));
    }
}

export class BuyMore implements Discountable {
    private readonly buyAtLeast: number
    private readonly foodSets: FoodSet[]
    private readonly discountPercent: number

    constructor(buyAtLeast: number, foodSets: FoodSet[], discountPercent: number) {
        this.buyAtLeast = buyAtLeast
        this.foodSets = foodSets
        this.discountPercent = discountPercent
    }

    calculate(foodSet: FoodSet, price: number, amount: number): number {
        if(amount < this.buyAtLeast + 1) return price;
        if(this.foodSets.indexOf(foodSet) < 0) return price
        return price - (price * (this.discountPercent / 100))
    }

}