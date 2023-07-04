import {describe} from "node:test";
import {users} from '../mocks/datasource'
import {CalculatorFactory} from "./factory";
import {CalculatorFactorySpy} from "../mocks/factory";

describe("Test factory", () => {
    it("Should return a calculator", () => {
        // Given
        const user = users[0]
        const calculatorFactory = new CalculatorFactory()

        // When
        const calculator = calculatorFactory.createWithMemberShip(user)

        // Then

        expect(calculator.constructor.name).toBe('FoodCalculator')

    })

    it("If user is member, set discount", () => {

        // Given
        const user = users[1]
        const calculatorFactory = new CalculatorFactorySpy()

        // When
        calculatorFactory.createWithMemberShip(user)

        // Then
        expect(calculatorFactory.setIsMember).toBeTruthy()
    })
})