import {Request, Response } from 'express'
import mssql from 'mssql'
import {v4 as uid} from 'uuid' 
import jwt from 'jsonwebtoken'
import path from 'path'
import dotenv from 'dotenv'

import {sqlConfig} from '../../config'
import { Tour, TourPayload } from '../models/tourModels'
import { tourSchema } from '../validation/tourValidation'
dotenv.config({path:path.resolve(__dirname,"../../.env")})


export async function addTour(request:Request,response:Response) {
    const id = uid()
    const {t_name,t_image_url,t_rating,t_price} = request.body

    const { error } = tourSchema.validate(request.body)
    try{
        if(error){
            return response.status(400).send(error.details[0].message)
        } else {
            let pool = await mssql.connect(sqlConfig)
            await pool.request()
            .input('id',id)
            .input('t_name',t_name)
            .input('t_image_url',t_image_url)
            .input('t_rating',t_rating)
            .input('t_price',t_price)
            .execute('addTour')

            const payload:TourPayload = {
                id: id,
                t_name: t_name,
                t_price: t_price
            }

            const token = jwt.sign(payload,process.env.SECRET as string,{expiresIn:'7d'})


            return response.status(200).send({message:"New Tour added succesfully!"})
            // return response.status(200).send({message:"New Tour added succesfully!",token})
        }

    } catch(error){
        response.status(500).send(error)
    }
}


export async function getTours (request:Request,response:Response){
    try{
        const pool = await mssql.connect(sqlConfig)
        const tours = (await pool.request().execute('getTours'))
        .recordset as Array<Tour>

        response.status(200).send(tours)

    } catch(error) {
        response.status(500).send(error)
    }

}


export async function getTour (request:Request<{id:string}>,response:Response){
    try{
        const pool = await mssql.connect(sqlConfig)
        const id = request.params.id
        const tour = (await pool.request()
        .input("id",id)
        .execute('getTour')).recordset[0] as Array<Tour>
        console.log(tour)
        if (tour ){
            response.status(200).send(tour)

        } else {
            response.status(200).send({message:"Tour unavailable. review the id and try again?"})
        }


    } catch(error) {
        response.status(500).send(error)
    }
}


export async function updateTour  (request:Request<{id:string}>,response:Response){
    const pool = await mssql.connect(sqlConfig)
    const id = request.params.id
    const tour = (await pool.request().input("id",id).execute('getHotel'))//.recordset
    .recordset[0] as Array<Tour>
    
    const { error } = tourSchema.validate(request.body)
    
    try{
        if (error) {
            return response.status(400).send(error.details[0].message)
        } else {

            const {t_name,t_image_url,t_rating,t_price} = request.body
            await pool.request()
            .input('id',id)
            .input('t_name',t_name)
            .input('t_image_url',t_image_url)
            .input('t_rating',t_rating)
            .input('t_price',t_price)
            .execute('updateTour')
    
            response.status(200).send({message:"Existing tour updated succesfully!"})
        }

    } catch(error) {
        response.status(500).send(error)
    }
}



export async function deleteTour (request:Request<{id:string}>,response:Response){
    try{
        const pool = await mssql.connect(sqlConfig)
        const id = request.params.id
        const tour = (await pool.request().input("id",id).execute('getTour'))
        
        if (tour){
            await pool.request()
            .input('id',id)
            .execute('deleteTour')

            response.status(200).send({message:"tour deleted succesfully!"})
            
        } else {
            response.status(200).send({message:"Tour not found. review the id and try again?"})
        }


    } catch(error) {
        response.status(500).send(error)
    }
}

