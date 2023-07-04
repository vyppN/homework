import {describe} from 'node:test'

import {FoodSet} from '../internal/domain/food'
import {MockDiscount} from '../mocks/discount'
import {FoodFormMockDataSource} from './food'

describe('Test food functions', () => {
    it('Test fetcher without discount', () => {

        // Given
        const repo = new FoodFormMockDataSource()

        // When
        const price = repo.getPrice({foodSet: FoodSet.RED, amount: 1})

        // then
        expect(price).toBe(50)
    })

    it('Test fetcher with discount', () => {

        // Given
        const discount = new MockDiscount(10)
        const repo = new FoodFormMockDataSource([discount])

        // When
        const price = repo.getPrice({foodSet: FoodSet.RED, amount: 1})

        // then
        expect(price).toBe(40)
    })
})