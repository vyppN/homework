import {FoodSet} from '../domain/food'

/*
With the port - adapter (Hexagonal) architecture, we have a very dynamic way to implement
functions or change the implementation easily without touching the other logics
 */

export interface Discountable {
    calculate: (foodSet: FoodSet, price: number, amount: number) => number
}