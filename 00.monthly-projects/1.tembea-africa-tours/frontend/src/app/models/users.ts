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

export interface registerResponse {
    message:string,
}


export interface loginUser  {
    id:string,
    u_email:string,
    u_password:string
}

export interface loginResponse {
    message:string,
    token:string
    // role:string  ->change backend to use this
}

