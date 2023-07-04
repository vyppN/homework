import {CalculatorFactory} from "../utils/factory";
import {User} from "../internal/domain/user";
import {FoodCalculatorService} from "../internal/port/service";

export class CalculatorFactorySpy extends CalculatorFactory {
    public setIsMember: boolean

    override createWithMemberShip(user: User): FoodCalculatorService {
        this.setIsMember = user.hasMemberCard
        return super.createWithMemberShip(user);
    }
}