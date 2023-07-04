import {describe} from 'node:test'

import {FoodSet} from './internal/domain/food'
import {User} from './internal/domain/user'
import {users} from './mocks/datasource'
import {BuyMore} from './repository/discount'
import {CalculatorFactory} from './utils/factory'

describe('Test discounts functions: MemberShip', () => {
    it('Member must have 10% discount', () => {
        //Given
        const member = users[1]

        const memberCalculatorFactory = new CalculatorFactory()
        const memberCalculator = memberCalculatorFactory.createWithMemberShip(member)


        // When
        const memberPrice = memberCalculator.getPrice(member.cart)

        // Then
        expect(memberPrice).toBe(81)
    })

    it('Non Member must have no discount', () => {


        const nonMember = users[0]
        nonMember.cart = [
            {foodSet: FoodSet.RED, amount: 5}
        ]
        const nonMemberCalculatorFactory = new CalculatorFactory()
        const nonMemberCalculator = nonMemberCalculatorFactory.createWithMemberShip(nonMember)

        // When
        const nonMemberPrice = nonMemberCalculator.getPrice(nonMember.cart)

        // Then
        expect(nonMemberPrice).toBe(250)
    })
})

describe('Test discounts functions: Buy more to discount', () => {
    it('Buy more than 2 of Orange, Pink, Green must got 5% discount', () => {
        //Given
        const user = {
            name: 'User',
            hasMemberCard: false,
            cart:[{foodSet: FoodSet.ORANGE, amount: 3}]
        } as User
        const buyMoreDiscountOption = new BuyMore(2, [FoodSet.ORANGE, FoodSet.GREEN, FoodSet.PINK], 5)
        const calculatorFactory = new CalculatorFactory([buyMoreDiscountOption])
        const calculator = calculatorFactory.createWithMemberShip(user)

        // When
        const price = calculator.getPrice(user.cart)

        // Then
        expect(price).toBe(342)

    })

    it('Buy less than 2 of Orange, Pink, Green -> no discount', () => {
        //Given
        const user = {
            name: 'User',
            hasMemberCard: false,
            cart:[{foodSet: FoodSet.ORANGE, amount: 2}]
        } as User
        const buyMoreDiscountOption = new BuyMore(2, [FoodSet.ORANGE, FoodSet.GREEN, FoodSet.PINK], 5)
        const calculatorFactory = new CalculatorFactory([buyMoreDiscountOption])
        const calculator = calculatorFactory.createWithMemberShip(user)

        // When
        const price = calculator.getPrice(user.cart)

        // Then
        expect(price).toBe(240)

    })

    it('Buy other than Orange, Pink, Green -> no discount', () => {
        //Given
        const user = {
            name: 'User',
            hasMemberCard: false,
            cart:[{foodSet: FoodSet.YELLOW, amount: 3}]
        } as User
        const buyMoreDiscountOption = new BuyMore(2, [FoodSet.ORANGE, FoodSet.GREEN, FoodSet.PINK], 5)
        const calculatorFactory = new CalculatorFactory([buyMoreDiscountOption])
        const calculator = calculatorFactory.createWithMemberShip(user)

        // When
        const price = calculator.getPrice(user.cart)

        // Then
        expect(price).toBe(150)

    })
})

describe('Test multiple discount', () => {
    // Given
    const user = users[4]
    const buyMoreDiscountOption = new BuyMore(2, [FoodSet.ORANGE, FoodSet.GREEN, FoodSet.PINK], 5)
    const calculatorFactory = new CalculatorFactory([buyMoreDiscountOption])
    const calculator = calculatorFactory.createWithMemberShip(user)

    // When
    const price = calculator.getPrice(user.cart)

    // Then
    expect(price).toBe(307.8)
})