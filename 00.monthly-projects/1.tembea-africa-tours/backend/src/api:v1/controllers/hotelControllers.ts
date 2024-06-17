import {Request, Response } from 'express'
import {v4 as uid} from 'uuid' 
import jwt from 'jsonwebtoken'
import path from 'path'
import dotenv from 'dotenv'

import { hotelSchema } from '../validation/hotelValidation'
import { Hotel, HotelPayload} from '../models/hotelModels'
import { DbHelper } from '../databaseHelpers'
dotenv.config({path:path.resolve(__dirname,"../../.env")})

// instatiate the bd helpers class
const dbInstance = new DbHelper()


export async function addHotel(request:Request,response:Response) {
    const id = uid()
    const {h_name,h_image_url,h_rating,h_price} = request.body

    const { error } = hotelSchema.validate(request.body)
    try{
        if(error){
            return response.status(400).send(error.details[0].message)
        } else {
            await dbInstance.exec('addHotel',{
                id:id,
                h_name:h_name,
                h_image_url:h_image_url,
                h_rating:h_rating,
                h_price:h_price
            })

            const payload:HotelPayload = {
                id: id,
                h_name: h_name,
                h_price: h_price
            }

            const token = jwt.sign(payload,process.env.SECRET as string,{expiresIn:'7d'})


            return response.status(200).send({message:"New Hotel added succesfully!"})
            // return response.status(200).send({message:"New Hotel added succesfully!",token})
        }

    } catch(error){
        response.status(500).send(error)
    }
}


export async function getHotels (request:Request,response:Response){
    try{
        const hotels = (await dbInstance.get('getHotels')).recordset as Array<Hotel>

        response.status(200).send(hotels)

    } catch(error) {
        response.status(500).send(error)
    }

}


export async function getHotel (request:Request<{id:string}>,response:Response){
    try{
        const id = request.params.id
        const hotel = (await dbInstance.exec('getHotel',{
            id:id
        })).recordset[0] as Array<Hotel>
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
    // const pool = await mssql.connect(sqlConfig)
    const id = request.params.id

    // const hotel = (await pool.request().input("id",id).execute('getHotel'))//.recordset
    // .recordset[0] as Array<Hotel>
    
    const { error } = hotelSchema.validate(request.body)
    
    try{
        if (error) {
            return response.status(400).send(error.details[0].message)
        } else {

            const {h_name,h_image_url,h_rating,h_price} = request.body
            await dbInstance.exec('updateHotel',{
                id:id,
                h_name:h_name,
                h_image_url:h_image_url,
                h_rating:h_rating,
                h_price:h_price
            })
    
            response.status(200).send({message:"Existing hotel updated succesfully!"})
        }

    } catch(error) {
        response.status(500).send(error)
    }
}



export async function deleteHotel (request:Request<{id:string}>,response:Response){
    try{
        const id = request.params.id
        const hotel = (await dbInstance.exec('getHotel',{
            id:id
        }))
    
        if (hotel){
            await dbInstance.exec('deleteHotel',{
                id:id
            })

            response.status(200).send({message:"hotel deleted succesfully!"})
            
        } else {
            response.status(200).send({message:"hotel not found. review the id and try again?"})
        }


    } catch(error) {
        response.status(500).send(error)
    }
}


