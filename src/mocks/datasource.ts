import {FoodSet} from "../internal/domain/food";
import {User} from "../internal/domain/user";

export const users = [
    {
        name: "User-1",
        cart: [
            {foodSet: FoodSet.RED, amount: 1},
            {foodSet: FoodSet.GREEN, amount: 1},
        ],
        hasMemberCard: false
    },
    {
        name: "User-2",
        cart: [
            {foodSet: FoodSet.RED, amount: 1},
            {foodSet: FoodSet.GREEN, amount: 1},
        ],
        hasMemberCard: true
    },
    {
        name: "User-3",
        cart: [
            {foodSet: FoodSet.ORANGE, amount: 2},
        ],
        hasMemberCard: false
    },
    {
        name: "User-4",
        cart: [
            {foodSet: FoodSet.ORANGE, amount: 3},
        ],
        hasMemberCard: false
    },
    {
        name: "User-5",
        cart: [
            {foodSet: FoodSet.ORANGE, amount: 3},
        ],
        hasMemberCard: true
    }
] as  User[]

export const FoodPrices = {
    'Red set': 50,
    'Green set': 40,
    'Blue set': 30,
    'Yellow set': 50,
    'Pink set': 80,
    'Purple set': 90,
    'Orange set': 120
}