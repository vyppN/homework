import {FoodSet} from "./internal/domain/food";
import {BuyMore} from "./repository/discount";
import {User} from "./internal/domain/user";
import {CalculatorFactory} from "./utils/factory";
import {Discountable} from "./internal/port/pricing";
import {users} from "./mocks/datasource";

users.forEach((user: User) => {
    const defaultDiscount = [
        new BuyMore(2,[FoodSet.ORANGE, FoodSet.PINK, FoodSet.GREEN],5)
    ] as Discountable[]

    const calculator = new CalculatorFactory(defaultDiscount)
    const total = calculator.createWithMemberShip(user).getPrice(user.cart)

    console.log(`${user.name} total price is ${total}`)
})