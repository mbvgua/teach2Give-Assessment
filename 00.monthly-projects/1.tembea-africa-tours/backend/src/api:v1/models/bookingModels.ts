import {Request} from 'express'

export interface Booking{
    id:string,
    user_id:string,
    tour_id:string,
    hotel_id:string,
    isDeleted?:number,
    isActive?:number
}

export interface BookingPayload{
    id: string,
    user_id: string
}

export interface ExtendedRequest extends Request{
    info?: BookingPayload
}
