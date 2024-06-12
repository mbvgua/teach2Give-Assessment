import {Request,Response,RequestHandler} from 'express'
import mssql from 'mssql'
import {v4 as uid} from 'uuid'
import {sqlConfig} from '../config'
import {Product, ProductRequest} from '../models/productsModels'


// export const addProducts:RequestHandler (request:Request,response:Response){
// export const addProduct = async (request:ProductRequest,response:Response)=>{
//     const id = uid()
//     const {name,price} = request.body

//     const pool = await mssql.connect(sqlConfig)
//     await pool.request()
//     .input()
// }

export async function addProduct (request:ProductRequest,response:Response){
    try{
        const id = uid()
        // const category_id = uid()
        const {name,price} = request.body
    
        const pool = await mssql.connect(sqlConfig)
        await pool.request()
        .input('id',id)
        .input('p_name',name)
        .input('price',price)
        // .input('category_id',category_id)    //-> do i need to input this? OR is is automatically by databse?!?!
        .execute('addProduct')

        response.status(200).send({message:"Product created succesfuly"})
    } catch(error) {
        response.status(500).send(error)
    }
}

export async function getProducts  (request:Request,response:Response){
    try{
        const pool = await mssql.connect(sqlConfig)
        const products = (await pool.request().execute('getProducts'))
        .recordset as Array<Product>

        response.status(200).send(products)

    } catch(error) {
        response.status(500).send(error)
    }

}


export async function getProduct  (request:Request<{id:string}>,response:Response){
    try{
        const pool = await mssql.connect(sqlConfig)
        const id = request.params.id
        // console.log(id)
        const product = (await pool.request().input("id",id).execute('getProduct'))//.recordset
        .recordset[0] as Array<Product>

        // if (product && product.id ){ -> passed id manually, so my produscts doesnt have an id
        if (product ){
            response.status(200).send(product)

        } else {
            response.status(200).send({message:"product not found"})
        }


    } catch(error) {
        response.status(500).send(error)
    }
}


export async function updateProduct  (request:Request<{id:string}>,response:Response){
    try{
        const pool = await mssql.connect(sqlConfig)
        const id = request.params.id
        // console.log(id)
        const product = (await pool.request().input("id",id).execute('getProduct'))//.recordset
        .recordset[0] as Array<Product>

        if (product){
            const {name,price} = request.body
            await pool.request()
            .input('id',id)
            .input('p_name',name)
            .input('price',price)
            // .input('category_id',category_id)
            .execute('updateProduct')

            response.status(200).send({message:"product updates succesfully!"})

        } else {
            response.status(200).send({message:"product not found"})
        }


    } catch(error) {
        response.status(500).send(error)
    }}


export async function deleteProduct  (request:Request<{id:string}>,response:Response){
    try{
        const pool = await mssql.connect(sqlConfig)
        const id = request.params.id
        // console.log(id)
        const product = (await pool.request().input("id",id).execute('deleteProduct'))//.recordset
        // .recordset[0] as Array<Product>  -> was the purpose of recordset?!?!

        if (product){
            await pool.request()
            .input('id',id)
            .execute('deleteProduct')

            response.status(200).send({message:"product deleted succesfully!"})

        } else {
            response.status(200).send({message:"product not found"})
        }


    } catch(error) {
        response.status(500).send(error)
    }
}