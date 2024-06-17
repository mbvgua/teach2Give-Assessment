import {Request, Response } from 'express'
import mssql from 'mssql'
import {v4 as uid} from 'uuid' 
import jwt from 'jsonwebtoken'
import path from 'path'
import dotenv from 'dotenv'

import {sqlConfig} from '../../config'
import { bookingSchema } from '../validation/bookingValidation'
import { Booking, BookingPayload } from '../models/bookingModels'
import { User } from '../models/authModels'
dotenv.config({path:path.resolve(__dirname,"../../.env")})


export async function addBooking(request:Request,response:Response) {
    const id = uid()
    const {user_id,tour_id,hotel_id} = request.body

    const { error } = bookingSchema.validate(request.body)
    try{
        if(error){
            return response.status(400).send(error.details[0].message)
        } else {
            let pool = await mssql.connect(sqlConfig)
            await pool.request()
            .input('id',id)
            .input('user_id',user_id)
            .input('tour_id',tour_id)
            .input('hotel_id',hotel_id)
            .execute('addBooking')

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
        const pool = await mssql.connect(sqlConfig)
        const booking = (await pool.request().execute('getBookings'))
        .recordset as Array<Booking>

        response.status(200).send(booking)

    } catch(error) {
        response.status(500).send(error)
    }

}


export async function getBooking (request:Request<{id:string}>,response:Response){
    try{
        const pool = await mssql.connect(sqlConfig)
        const id = request.params.id
        const booking = (await pool.request()
        .input("id",id)
        .execute('getBooking')).recordset[0] as Array<Booking>
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
    const pool = await mssql.connect(sqlConfig)
    const id = request.params.id
    const booking = (await pool.request().input("id",id).execute('getBooking'))//.recordset
    .recordset[0] as Array<User>
    
    const { error } = bookingSchema.validate(request.body)
    
    try{
        if (error) {
            return response.status(400).send(error.details[0].message)
        } else if(booking){
            
            const {user_id, tour_id,hotel_id} = request.body
            await pool.request()
            .input('id',id)
            .input('user_id',user_id)
            .input('tour_id',tour_id)
            .input('hotel_id',hotel_id)
            .execute('updateBooking')
    
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
        const pool = await mssql.connect(sqlConfig)
        const id = request.params.id
        const booking = (await pool.request().input("id",id).execute('getBooking'))
        
        if (booking){
            await pool.request()
            .input('id',id)
            .execute('cancelBooking')

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
        const pool = await mssql.connect(sqlConfig)
        const id = request.params.id
        const booking = (await pool.request().input("id",id).execute('getBooking'))
        
        if (booking){
            await pool.request()
            .input('id',id)
            .execute('deleteBooking')

            response.status(200).send({message:"booking has been deleted succesfully!"})
            
        } else {
            response.status(200).send({message:"booking not found. review the id and try again?"})
        }


    } catch(error) {
        response.status(500).send(error)
    }
}

