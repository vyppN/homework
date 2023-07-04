import {FoodSet} from './internal/domain/food'
import {User} from './internal/domain/user'
import {Discountable} from './internal/port/pricing'
import {users} from './mocks/datasource'
import {BuyMoreToDiscount} from './repository/discount'
import {CalculatorFactory} from './utils/factory'

/*
We have a set of users with various settings,
let's try it
 */

users.forEach((user: User) => {
    const defaultDiscount = [
        new BuyMoreToDiscount(2,[FoodSet.ORANGE, FoodSet.PINK, FoodSet.GREEN],5)
    ] as Discountable[]

    const calculator = new CalculatorFactory(defaultDiscount)
    const total = calculator.createWithMemberShip(user).getPrice(user.cart)

    console.log(`${user.name} total price is ${total}`)
})