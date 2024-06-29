import {Request} from 'express'

export interface Tour{
    id:string,
    t_name:string,
    t_image_url:string,
    t_rating:string,
    t_description:string,
    t_locattion:string,
    t_price:number
}

export interface TourPayload{
    id: string,
    t_name: string,
    t_price: number
}

export interface ExtendedRequest extends Request{
    info?: TourPayload
}