// create the hotels interface
export interface Tours {
    id: number,
    t_name:string,
    t_location:string,
    t_image_url:string,
    t_description:string,
    t_rating:string,
    t_price:number,
    isDeleted: number
}

export interface toursResponse {
    message:string
}