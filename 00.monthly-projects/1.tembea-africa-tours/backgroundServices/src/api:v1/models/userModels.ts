
export interface UserEmail{
    id:string,
    u_name:string,
    u_email: string
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