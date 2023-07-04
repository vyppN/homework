import {CalculatorFactory} from "../utils/factory";
import {User} from "../internal/domain/user";

import {FoodCalculator} from "../service/calculator";

export class CalculatorFactorySpy extends CalculatorFactory {
    public setIsMember: boolean

    override createWithMemberShip(user: User): FoodCalculator {
        this.setIsMember = user.hasMemberCard
        return super.createWithMemberShip(user);
    }
}