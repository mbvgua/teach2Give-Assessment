import {Request} from 'express'

export interface Category{
    id: string,
    name: string
}

export interface CategoryRequest extends Request{
    body:{
        name: string,
    }
}

