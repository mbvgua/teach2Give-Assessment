import {Request} from 'express'


export interface Product {
    id: number,
    title: string,
    description: string,
    price: number
}

export interface addProduct {
    title: string,
    description: string,
    price: number
}

// interface that extends a norma request
// also strong types your body to a different one
export interface productBody extends Request {
    body:addProduct
}

// export{ Product }
