import {Request, Response } from 'express'
import mssql from 'mssql'
import {v4 as uid} from 'uuid' 
import jwt from 'jsonwebtoken'
import path from 'path'
import dotenv from 'dotenv'

import { DbHelper } from '../databaseHelpers'
import {sqlConfig} from '../../config'
import { bookingSchema } from '../validation/bookingValidation'
import { Booking, BookingPayload } from '../models/bookingModels'
import { User } from '../models/authModels'
dotenv.config({path:path.resolve(__dirname,"../../.env")})

// instatiate the db helpers class
const dbInstance = new DbHelper()


export async function addBooking(request:Request,response:Response) {
    const id = uid()
    const {user_id,tour_id,hotel_id} = request.body

    const { error } = bookingSchema.validate(request.body)
    try{
        if(error){
            return response.status(400).send(error.details[0].message)
        } else {
            await dbInstance.exec('addBooking',{
                id:id,
                user_id:user_id,
                tour_id:tour_id,
                hotel_id:hotel_id
            })

            const payload:BookingPayload = {
                id: id,
                user_id: user_id
            }

            const token = jwt.sign(payload,process.env.SECRET as string,{expiresIn:'7d'})

            return response.status(200).send({message:"New booking has been made!"})
            // return response.status(200).send({message:"New booking has been made!",token})
        }

    } catch(error){
        response.status(500).send(error)
    }
}


export async function getBookings (request:Request,response:Response){
    try{
        const bookings = (await dbInstance.get('getBookings')).recordset as Array<Booking>
        // console.log(bookings)

        response.status(200).send(bookings)

    } catch(error) {
        response.status(500).send(error)
    }

}


export async function getBooking (request:Request<{id:string}>,response:Response){
    try{
        const id = request.params.id
        const booking = (await dbInstance.exec('getBooking',{
            id:id
        })).recordset[0] as Array<Booking>
        console.log(booking)
        if (booking ){
            response.status(200).send(booking)

        } else {
            response.status(200).send({message:"Booking not found. Try different id?"})
        }


    } catch(error) {
        response.status(500).send(error)
    }
}


export async function updateBooking  (request:Request<{id:string}>,response:Response){
    const id = request.params.id
    const booking = (await dbInstance.exec('getBooking',{
        id:id
    })).recordset[0] as Array<User>
   
    const { error } = bookingSchema.validate(request.body)
    
    try{
        if (error) {
            return response.status(400).send(error.details[0].message)
        } else if(booking){
            
            const {user_id, tour_id,hotel_id} = request.body
            await dbInstance.exec('updateBooking',{
                id:id,
                user_id:user_id,
                tour_id:tour_id,
                hotel_id:hotel_id
            })
    
            response.status(200).send({message:"Existing booing has been updated succesfully!"})
        } else {
            response.status(200).send({message:"There exists no booking of that id"})

        }

    } catch(error) {
        response.status(500).send(error)
    }
}



export async function cancelBooking (request:Request<{id:string}>,response:Response){
    try{
        const id = request.params.id
        const booking = (await dbInstance.exec('getBooking',{
            id:id
        }))
        
        if (booking){
            await dbInstance.exec('cancelBooking',{
                id:id
            })

            response.status(200).send({message:"booking has been cancelled succesfully!"})
            
        } else {
            response.status(200).send({message:"booking not found. review the id and try again?"})
        }


    } catch(error) {
        response.status(500).send(error)
    }
}



export async function deleteBooking (request:Request<{id:string}>,response:Response){
    try{
        const id = request.params.id
        const booking = (await dbInstance.exec('getBooking',{
            id:id
        }))
        /* problem-> gets all bookings even the alresy deleted ones due to soft delete!
        sing getBookongs instaed would resolve this but that has no arguments passed!*/
        console.log(booking)
        
        if (booking){
            await dbInstance.exec('deleteBooking',{
                id:id
            })


            response.status(200).send({message:"booking has been deleted succesfully!"})
            
        } else {
            response.status(500).send({message:"booking not found. review the id and try again?"})
        }


    } catch(error) {
        response.status(500).send(error)
    }
}

