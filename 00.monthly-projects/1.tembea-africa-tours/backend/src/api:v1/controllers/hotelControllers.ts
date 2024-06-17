import {Request, Response } from 'express'
import mssql from 'mssql'
import {v4 as uid} from 'uuid' 
import bcrypt from 'bcrypt'
import path from 'path'
import dotenv from 'dotenv'

import {sqlConfig} from '../../config'
import { hotelSchema } from '../validation/hotelValidation'
import { Hotel } from '../models/hotelModels'
dotenv.config({path:path.resolve(__dirname,"../../.env")})


export async function addHotel(request:Request,response:Response) {
    const id = uid()
    const {h_name,h_image_url,h_rating,h_price} = request.body

    const { error } = hotelSchema.validate(request.body)
    try{
        if(error){
            return response.status(400).send(error.details[0].message)
        } else {
            let pool = await mssql.connect(sqlConfig)
            await pool.request()
            .input('id',id)
            .input('h_name',h_name)
            .input('h_image_url',h_image_url)
            .input('h_rating',h_rating)
            .input('h_price',h_price)
            .execute('addHotel')

            return response.status(200).send({message:"New Hotel added succesfully!"})
        }

    } catch(error){
        response.status(500).send(error)
    }
}


export async function getHotels (request:Request,response:Response){
    try{
        const pool = await mssql.connect(sqlConfig)
        const hotels = (await pool.request().execute('getHotels'))
        .recordset as Array<Hotel>

        response.status(200).send(hotels)

    } catch(error) {
        response.status(500).send(error)
    }

}


export async function getHotel (request:Request<{id:string}>,response:Response){
    try{
        const pool = await mssql.connect(sqlConfig)
        const id = request.params.id
        const hotel = (await pool.request()
        .input("id",id)
        .execute('getHotel')).recordset[0] as Array<Hotel>
        console.log(hotel)
        if (hotel ){
            response.status(200).send(hotel)

        } else {
            response.status(200).send({message:"Hotel not found. review the id and try again?"})
        }


    } catch(error) {
        response.status(500).send(error)
    }
}


export async function updateHotel  (request:Request<{id:string}>,response:Response){
    const pool = await mssql.connect(sqlConfig)
    const id = request.params.id
    const product = (await pool.request().input("id",id).execute('getHotel'))//.recordset
    .recordset[0] as Array<Hotel>
    
    const { error } = hotelSchema.validate(request.body)
    
    try{
        if (error) {
            return response.status(400).send(error.details[0].message)
        } else {

            const {h_name,h_image_url,h_rating,h_price} = request.body
            await pool.request()
            .input('id',id)
            .input('h_name',h_name)
            .input('h_image_url',h_image_url)
            .input('h_rating',h_rating)
            .input('h_price',h_price)
            .execute('updateHotel')
    
            response.status(200).send({message:"Existing hotel updated succesfully!"})
        }

    } catch(error) {
        response.status(500).send(error)
    }
}



export async function deleteHotel (request:Request<{id:string}>,response:Response){
    try{
        const pool = await mssql.connect(sqlConfig)
        const id = request.params.id
        const hotel = (await pool.request().input("id",id).execute('getHotel'))
        
        if (hotel){
            await pool.request()
            .input('id',id)
            .execute('deleteHotel')

            response.status(200).send({message:"hotel deleted succesfully!"})
            
        } else {
            response.status(200).send({message:"hotel not found. review the id and try again?"})
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
