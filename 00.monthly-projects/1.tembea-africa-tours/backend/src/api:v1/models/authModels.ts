import {Request} from 'express'

export interface User{
    id:string,
    u_name:string,
    u_email:string,
    u_password:string,
    role:string,
    isEmailSent?:number, //set property to optional
    isDeleted?:number,  //set property to optional
    bookingsMade?:number
}

export interface UserPayload{
    id: string,
    name: string,
    email?:string,
    role:string
}

export interface ExtendedRequest extends Request{
    info?: UserPayload
}

// create an enum for user roles
export enum Roles {
    Admin = 'admin',
    User = 'user',
    Guest = 'guest'
}