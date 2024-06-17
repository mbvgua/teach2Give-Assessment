
export interface BookingEmail{
    to:string,
    from:any,   //-> change this layer
    subject: string,
    html: any   //-> change this layer
}

export interface Booking{
    id:string,
    user_id:string,
    tour_id:string,
    hotel_id:string,
    isDeleted?:number,
    isActive?:number
}

export interface AuthDetails {
    user: string | undefined;
    pass: string | undefined;
}

export interface ConfigDetails {
    host: string;
    service: string;
    port: number;
    auth: AuthDetails;
}

