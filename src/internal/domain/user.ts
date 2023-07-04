import {Food} from './food'

export interface User {
    name: string
    cart: Food[]
    hasMemberCard: boolean
}