import {Request} from 'express'

export interface Hotel{
    id:string,
    h_name:string,
    h_image_url:string,
    h_rating:string,
    h_price:number
}

// export interface Payload{
//     id: string,
//     name: string
// }

// export interface ExtendedRequest extends Request{
//     info?: Payload
// }