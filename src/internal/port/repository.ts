import {Food} from '../domain/food'

/*
With the port - adapter (Hexagonal) architecture, we have a very dynamic way to implement
functions or change the implementation easily without touching the other logics
 */

export interface FoodRepository {
    getPrice: (food: Food) => number
}

