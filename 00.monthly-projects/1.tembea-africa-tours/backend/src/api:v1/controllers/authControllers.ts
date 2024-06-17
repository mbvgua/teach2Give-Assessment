import {Request, Response } from 'express'
import mssql from 'mssql'
import {v4 as uid} from 'uuid' 
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import path from 'path'
import dotenv from 'dotenv'

import {sqlConfig} from '../../config'
import { registerSchema } from '../validation/authValidation'
import { Payload, User } from '../models/authModels'
dotenv.config({path:path.resolve(__dirname,"../../.env")})


export async function registerUser(request:Request,response:Response) {
    const id = uid()
    const {u_name,u_email,u_password} = request.body

    const { error } = registerSchema.validate(request.body)
    try{
        if(error){
            return response.status(400).send(error.details[0].message)
        } else {
            const hashedPassword = await bcrypt.hash(u_password,9)    //salt MUST be below 10 to save on time
            let pool = await mssql.connect(sqlConfig)
            await pool.request()
            .input('id',id)
            .input('u_name',u_name)
            .input('u_email',u_email)
            .input('u_password',hashedPassword)
            .execute('addUser')

            return response.status(200).send({message:"New User added succesfully!"})
        }

    } catch(error){
        response.status(500).send(error)
    }
}


export async function getUsers (request:Request,response:Response){
    try{
        const pool = await mssql.connect(sqlConfig)
        const users = (await pool.request().execute('getUsers'))
        .recordset as Array<User>

        response.status(200).send(users)

    } catch(error) {
        response.status(500).send(error)
    }

}


export async function getUser (request:Request<{id:string}>,response:Response){
    try{
        const pool = await mssql.connect(sqlConfig)
        const id = request.params.id
        const user = (await pool.request()
        .input("id",id)
        .execute('getUser')).recordset[0] as Array<User>
        console.log(user)
        if (user ){
            response.status(200).send(user)

        } else {
            response.status(200).send({message:"User not found. review the id and try again?"})
        }


    } catch(error) {
        response.status(500).send(error)
    }
}


export async function updateUser  (request:Request<{id:string}>,response:Response){
    try{
        const pool = await mssql.connect(sqlConfig)
        const id = request.params.id
        // console.log(id)
        const product = (await pool.request().input("id",id).execute('getUser'))//.recordset
        .recordset[0] as Array<User>

        if (product){
            const {u_name,u_email,u_password} = request.body
            await pool.request()
            .input('id',id)
            .input('u_name',u_name)
            .input('u_email',u_email)
            .input('u_password',u_password)
            .execute('updateUser')

            response.status(200).send({message:"Existing user updated succesfully!"})

        } else {
            response.status(200).send({message:"User not found. review the id and try again?"})
        }


    } catch(error) {
        response.status(500).send(error)
    }}



export async function deleteUser (request:Request<{id:string}>,response:Response){
    try{
        const pool = await mssql.connect(sqlConfig)
        const id = request.params.id
        const user = (await pool.request().input("id",id))//.recordset
        // const user = (await pool.request().input("id",id).execute('deleteUser'))//.recordset
        // .recordset[0] as Array<Product>  -> was the purpose of recordset?!?!
        
        if (user){
            await pool.request()
            .input('id',id)
            .execute('deleteUser')

            response.status(200).send({message:"user deleted succesfully!"})
            
        } else {
            response.status(200).send({message:"User not found. review the id and try again?"})
        }


    } catch(error) {
        response.status(500).send(error)
    }
}



// // function for login
// export async function loginUser (request:Request<{id:string}>, response:Response){
//     try{
//         const {id,u_password} = request.body
//         let pool = await mssql.connect(sqlConfig)
//         let user = (await pool.request()
//         .input('id',id)
//         .execute('getUser')).recordset as Array<User>
//         // console.log(user.u_password)

//         // user validation
        
//         if(user.length !== 0 ){
//             // this had too much nesting. decided to use an array instaed
            
//             const isValid = await bcrypt.compare(u_password,user[0].u_password)
            
//             if(isValid){
//                 const payload:Payload = {
//                     id: user[0].id,
//                     name: user[0].u_name
//                 }

//                 const token = jwt.sign(payload,process.env.SECRET as string,{expiresIn:'10d'})

//                 return response.status(200).send({message:"login successful!"})
//                 // return response.status(200).send({message:"login successful!",token})
//             } else{
//             return response.status(500).send({message:"invalid login credentials.try again?"})
//         }
//         }
//     } catch(error){
//         response.status(500).send(error)
//     }
// } 
