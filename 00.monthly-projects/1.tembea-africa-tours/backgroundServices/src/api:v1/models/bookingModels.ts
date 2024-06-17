


export interface BookingEmail{
    id:string,
    user_id: string
    hotel_id?: string
    tour_id?: string
}

export interface Booking{
    id:string,
    user_id:string,
    tour_id:string,
    hotel_id:string,
    isDeleted?:number,
    isActive?:number
}
