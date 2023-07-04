import {Food} from "../domain/food";

export interface FoodCalculatorService {
    getPrice: (foods: Food[]) => number
}