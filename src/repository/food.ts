import {Food} from '../internal/domain/food'
import {Discountable} from '../internal/port/pricing'
import {FoodRepository} from '../internal/port/repository'
import {FoodPrices} from '../mocks/datasource'


export class FoodFormMockDataSource implements FoodRepository {
    private readonly discountOptions?: Discountable[]

    constructor(discountOptions?: Discountable[]) {
        this.discountOptions = discountOptions
    }

    getPrice(food: Food): number {
        let price = FoodPrices[food.foodSet]

        if(this.discountOptions && this.discountOptions.length > 0) {
            this.discountOptions.forEach((option: Discountable) => {
                price = option.calculate(food.foodSet, price, food.amount)
            })
        }

        return price * food.amount
    }
}
