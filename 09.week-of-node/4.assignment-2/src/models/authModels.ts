// import {Request} from 'express'

export interface User{
    id:string,
    name?:string,
    email:string,
    u_password:string,
    isDeleted?:string,  //set property to optional
    isEmailSent?:string //set property to optional
}