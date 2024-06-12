import {Request,Response,RequestHandler} from 'express'
import {mssql} from 'mssql'
import {v4 as uid} from 'uuid'
import {Product} from '../models/productsModels'


// export const addProducts:RequestHandler (request:Request,response:Response){
export const addProducts = (request:Product,response:Response){
    const id = uid()
    const {name} = request.body
}