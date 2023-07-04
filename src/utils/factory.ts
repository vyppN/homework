import {User} from '../internal/domain/user'
import {Discountable} from '../internal/port/pricing'
import {FoodCalculatorService} from '../internal/port/service'
import {MembershipDiscount} from '../repository/discount'
import {FoodFormMockDataSource} from '../repository/food'
import {FoodCalculator} from '../service/calculator'

/*
The factory design pattern is very cool for a lazy guy like me.
 */

export class CalculatorFactory {
    private readonly defaultDiscountOptions?: Discountable[]

    constructor(defaultDiscountOptions?: Discountable[]) {
        this.defaultDiscountOptions = defaultDiscountOptions || []
    }

    /*
    One function should do only one thing, right?
     */
    createWithMemberShip(user: User): FoodCalculatorService {
        if(user.hasMemberCard) this.defaultDiscountOptions.push(new MembershipDiscount(10))
        const repo = new FoodFormMockDataSource(this.defaultDiscountOptions)

        return new FoodCalculator(repo)
    }
}