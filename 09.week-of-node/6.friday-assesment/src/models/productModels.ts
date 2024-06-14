import {Request} from 'express'

export interface Product{
    id: string,
    p_name: string,
    price:number,
    category_id: string
}

export interface ProductRequest extends Request{
    body:{
        name: string,
        price: number
    }
}


export interface ProductPagination extends Request{
    body:{
        page_size: number,
        page_number: number
    }
}



// export default Product