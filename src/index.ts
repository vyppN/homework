import {FoodSet} from './internal/domain/food'
import {User} from './internal/domain/user'
import {Discountable} from './internal/port/pricing'
import {users} from './mocks/datasource'
import {BuyMore} from './repository/discount'
import {CalculatorFactory} from './utils/factory'

users.forEach((user: User) => {
    const defaultDiscount = [
        new BuyMore(2,[FoodSet.ORANGE, FoodSet.PINK, FoodSet.GREEN],5)
    ] as Discountable[]

    const calculator = new CalculatorFactory(defaultDiscount)
    const total = calculator.createWithMemberShip(user).getPrice(user.cart)

    console.log(`${user.name} total price is ${total}`)
})