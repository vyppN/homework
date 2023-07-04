import {CalculatorFactory} from "../utils/factory";
import {User} from "../internal/domain/user";
import {FoodCalculatorService} from "../internal/port/service";

/*
We have private access modifier, just SPY on it
*/

export class CalculatorFactorySpy extends CalculatorFactory {
    public setIsMember: boolean

    override createWithMemberShip(user: User): FoodCalculatorService {
        this.setIsMember = user.hasMemberCard
        return super.createWithMemberShip(user);
    }
}