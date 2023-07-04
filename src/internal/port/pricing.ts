import {FoodSet} from "../domain/food";

export interface Discountable {
    calculate: (foodSet: FoodSet, price: number, amount: number) => number
}