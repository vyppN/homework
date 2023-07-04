export enum FoodSet {
    RED= 'Red set',
    GREEN = 'Green set',
    BLUE = 'Blue set',
    YELLOW = 'Yellow set',
    PINK = 'Pink set',
    PURPLE = 'Purple set',
    ORANGE = 'Orange set'
}

export interface Food {
    foodSet: FoodSet,
    amount: number
}