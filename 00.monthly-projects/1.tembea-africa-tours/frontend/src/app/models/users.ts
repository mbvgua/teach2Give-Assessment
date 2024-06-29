// create the hotels interface
// export interface User{
//     id?:string,  //FINALLY USE THIS 1.
//     u_name?:string,
//     u_email:string,
//     u_password:string
// }

export interface registerUser  {
    id:string,
    u_name:string,
    u_email:string,
    u_password:string
}

export interface loginUser  {
    id:string,
    u_email:string,
    u_password:string
}

export interface userResponse {
    message:string,
    token:string
}


// export interface User{
//     id:string,
//     u_name:string,
//     u_email:string,
//     u_password:string,
//     isEmailSent?:number, //set property to optional
//     isDeleted?:number,  //set property to optional
//     bookingsMade?:number
// }