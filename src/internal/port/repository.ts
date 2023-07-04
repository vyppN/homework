import {Food} from "../domain/food";


export interface FoodRepository {
    getPrice: (food: Food) => number
}

