import {Food} from './food'

/*
Nothing, just data objects
*/

export interface User {
    name: string
    cart: Food[]
    hasMemberCard: boolean
}