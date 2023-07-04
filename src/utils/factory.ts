import {User} from '../internal/domain/user'
import {Discountable} from '../internal/port/pricing'
import {Membership} from '../repository/discount'
import {FoodFetcher} from '../repository/food'
import {FoodCalculator} from '../service/calculator'

export class CalculatorFactory {
    private readonly defaultDiscountOptions?: Discountable[]

    constructor(defaultDiscountOptions?: Discountable[]) {
        this.defaultDiscountOptions = defaultDiscountOptions || []
    }

    createWithMemberShip(user: User): FoodCalculator {
        if(user.hasMemberCard) this.defaultDiscountOptions.push(new Membership(10))
        const repo = new FoodFetcher(this.defaultDiscountOptions)
        return new FoodCalculator(repo)
    }
}