import {Request} from 'express'

export interface Tour{
    id:string,
    t_name:string,
    t_image_url:string,
    t_rating:string,
    t_price:number
}

// export interface Payload{
//     id: string,
//     name: string
// }

// export interface ExtendedRequest extends Request{
//     info?: Payload
// }