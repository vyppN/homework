import {describe} from "node:test";
import {users} from "../mocks/datasource";
import {FoodCalculator} from "./calculator";
import {MockFoodRepository} from "../mocks/food";
import {MockDiscount} from "../mocks/discount";

describe("Test calculator functions", () => {
    it("Without discount", () => {

        // Given
        const user = users[0]
        const repo = new MockFoodRepository(100)
        const calculator = new FoodCalculator(repo)

        // When
        const price = calculator.getPrice(user.cart)

        // Then
        expect(price).toBe(200)
    })

    it("With discount", () => {

        // Given
        const user = users[0]
        // mock dis
        const discount = new MockDiscount(10)
        // mock repo always return price 100
        const repo = new MockFoodRepository(100, discount)
        const calculator = new FoodCalculator(repo)

        // When
        const price = calculator.getPrice(user.cart)

        // Then
        expect(price).toBe(180)
    })
})