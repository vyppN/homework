import {describe} from 'node:test'

import {FoodSet} from '../internal/domain/food'
import {User} from '../internal/domain/user'
import {MockCalculator} from '../mocks/calculator'
import {users} from '../mocks/datasource'
import {BuyMore, Membership} from './discount'


describe('Test discounts functions: MemberShip', () => {
    it('Member must have 10% discount', () => {

        // Given
        const memberShip = new Membership(10)
        const calculator = new MockCalculator(memberShip)
        const member = users[1]

        // When
        const price = calculator.getPrice(member.cart)

        // Then
        expect(price).toBe(81)
    })

    it('Buy more than 2 of Orange, Pink, Green must got 5% discount', () => {
        //Given
        const buyMoreDiscountOption = new BuyMore(2, [FoodSet.ORANGE, FoodSet.GREEN, FoodSet.PINK], 5)
        const calculator = new MockCalculator(buyMoreDiscountOption)
        const user = {
            name: 'User',
            hasMemberCard: false,
            cart:[{foodSet: FoodSet.ORANGE, amount: 3}]
        } as User


        // When
        const price = calculator.getPrice(user.cart)

        // Then
        expect(price).toBe(342)

    })

    it('Buy 2 or less of Orange, Pink, Green must got no discount', () => {
        //Given
        const buyMoreDiscountOption = new BuyMore(2, [FoodSet.ORANGE, FoodSet.GREEN, FoodSet.PINK], 5)
        const calculator = new MockCalculator(buyMoreDiscountOption)
        const user = {
            name: 'User',
            hasMemberCard: false,
            cart:[{foodSet: FoodSet.ORANGE, amount: 2}]
        } as User


        // When
        const price = calculator.getPrice(user.cart)

        // Then
        expect(price).toBe(240)

    })

    it('Buy none of Orange, Pink, Green must got no discount', () => {
        //Given
        const buyMoreDiscountOption = new BuyMore(2, [FoodSet.ORANGE, FoodSet.GREEN, FoodSet.PINK], 5)
        const calculator = new MockCalculator(buyMoreDiscountOption)
        const user = {
            name: 'User',
            hasMemberCard: false,
            cart:[{foodSet: FoodSet.YELLOW, amount: 3}]
        } as User


        // When
        const price = calculator.getPrice(user.cart)

        // Then
        expect(price).toBe(150)

    })
})

