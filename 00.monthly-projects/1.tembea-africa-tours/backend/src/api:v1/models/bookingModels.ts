import {Request} from 'express'

export interface Booking{
    id:string,
    user_id:string,
    tour_id:string,
    hotel_id:string,
}

// export interface Payload{
//     id: string,
//     name: string
// }

// export interface ExtendedRequest extends Request{
//     info?: Payload
// }
