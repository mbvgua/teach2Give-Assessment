// create the hotels interface
export interface Hotels  {
    id: number,
    h_name:string,
    h_location:string,
    h_image_url:string,
    h_description:string,
    h_rating:string,
    h_price:number,
    isDeleted: number
}

export interface hotelsResponse {
    message:string
}