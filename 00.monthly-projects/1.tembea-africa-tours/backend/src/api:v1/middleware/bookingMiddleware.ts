import {Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'
import path from 'path'
import dotenv from 'dotenv'
import { ExtendedRequest, BookingPayload } from '../models/bookingModels'
dotenv.config({path:path.resolve(__dirname,"../../.env")})


export async function verifyBookingToken (request:ExtendedRequest, response:Response, next:NextFunction){
    try{
        // 1.read the token
        const token = request.headers['token'] as string

        // 2.verify the token presence
        if (!token){
            return response.status(401).send({message:"Access forbidden. Confirm Token"})
        } else {
            // 3.read the token
            const decodedToken = jwt.verify(token, process.env.SECRET as string) as BookingPayload
            request.info = decodedToken
            console.log(decodedToken)
        }

    } catch(error) {
        return response.status(500).send(error)
    }

    next()
    // now put the next function here
} 