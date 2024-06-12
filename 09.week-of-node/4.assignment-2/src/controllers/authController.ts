import {Request, Response } from 'express'
import {sqlConfig} from '../config'
import mssql from 'mssql'
import { registerSchema } from '../helpers'
import { Payload, User } from '../models/authModels'
import {v4 as uid} from 'uuid' 
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config({path:path.resolve(__dirname,"../../.env")})


export async function registerUser(request:Request,response:Response) {
    const id = uid()
    const {name,email,password} = request.body

    const { error } = registerSchema.validate(request.body)
    try{
        if(error){
            return response.status(400).send(error)
            // return response.status(400).send(error.details[0])
            // return response.status(400).send(error.details[0].message)
        } else {
            const hashedPassword = await bcrypt.hash(password,9)    //salt MUST be below 10 to save on time
            let pool = await mssql.connect(sqlConfig)
            await pool.request()
            .input('id',id)
            .input('u_name',name)
            .input('email',email)
            .input('u_password',hashedPassword)
            .execute('addUser')

            return response.status(200).send({message:"New User added succesfully!"})
        }

    } catch(error){
        response.status(500).send(error)
    }
}

// function for login
export async function loginUser (request:Request, response:Response){
    try{
        const {email,password} = request.body
        let pool = await mssql.connect(sqlConfig)
        let user = (await pool.request()
        .input('email',email)
        .execute('getUser')).recordset as Array<User>
        // console.log(user.u_password)

        // user validation
        
        if(user.length !== 0 ){
            // this had too much nesting. decided to use an array instaed
            
            const isValid = await bcrypt.compare(password,user[0].u_password)
            
            if(isValid){
                const payload:Payload = {
                    id: user[0].id,
                    name: user[0].name
                }

                const token = jwt.sign(payload,process.env.SECRET as string,{expiresIn:'1h'})

                return response.status(200).send({message:"login successful!"})
                // return response.status(200).send({message:"login successful!",token})
            } else{
            return response.status(500).send({message:"invalid login credentials.try again?"})
        }
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


export async function getUser (request:Request,response:Response){
    try{
        const pool = await mssql.connect(sqlConfig)
        const {email} = request.body
        const user = (await pool.request()
        .input("email",email)
        .execute('getUser')).recordset[0] as Array<User>
        console.log(user)
        if (user ){
            response.status(200).send(user)

        } else {
            response.status(200).send({message:"user not found"})
        }


    } catch(error) {
        response.status(500).send(error)
    }
}


export async function deleteUser (request:Request<{id:string}>,response:Response){
    try{
        const pool = await mssql.connect(sqlConfig)
        const id = request.params.id
        const user = (await pool.request().input("id",id).execute('deleteUser'))//.recordset
        // .recordset[0] as Array<Product>  -> was the purpose of recordset?!?!

        if (user){
            await pool.request()
            .input('id',id)
            .execute('deleteUser')

            response.status(200).send({message:"user deleted succesfully!"})

        } else {
            response.status(200).send({message:"user not found"})
        }


    } catch(error) {
        response.status(500).send(error)
    }
}


