
export interface UserEmail{
    to:string,
    from:any,   //-> change this layer
    subject: string,
    html: any   //-> change this layer
}


export interface User{
    id:string,
    u_name:string,
    u_email:string,
    u_password:string,
    isEmailSent?:number, //set property to optional
    isDeleted?:number,  //set property to optional
    bookingsMade?:number
}