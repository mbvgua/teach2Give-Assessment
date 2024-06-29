import {Request} from 'express'

export interface Hotel{
    id:string,
    h_name:string,
    h_image_url:string,
    h_rating:string,
    h_price:number,
    h_description:string,
    h_location:string
}

export interface HotelPayload{
    id: string,
    h_name: string,
    h_price: number
}

export interface ExtendedRequest extends Request{
    info?: HotelPayload
}