import {Request,Response} from 'express'
import mssql from 'mssql'
import {v4 as uid} from 'uuid'
import {sqlConfig} from '../config'
import {Product, ProductRequest} from '../models/productModels'


export async function addProduct (request:ProductRequest,response:Response){
    try{
        const id = uid()
        const {name,price} = request.body
    
        const pool = await mssql.connect(sqlConfig)
        await pool.request()
        .input('id',id)
        .input('p_name',name)
        .input('price',price)
        .execute('addProductProxy')

        response.status(200).send({message:"Product created succesfuly"})
    } catch(error) {
        response.status(500).send(error)
    }
}

export async function getProducts  (request:Request,response:Response){
    try{
        const pool = await mssql.connect(sqlConfig)
        const products = (await pool.request().execute('getProductsProxy'))
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
        const product = (await pool.request().input("id",id).execute('getProductProxy'))//.recordset
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



export async function deleteProduct  (request:Request<{id:string}>,response:Response){
    try{
        const pool = await mssql.connect(sqlConfig)
        const id = request.params.id
        const product = (await pool.request().input("id",id).execute('deleteProductProxy'))//.recordset

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



export async function searchProduct (request:Request,response:Response){
    try{
        const pool = await mssql.connect(sqlConfig)
        const {name} = request.body
        const user = (await pool.request()
        .input("p_name",name)
        .execute('searchProductProxy')).recordset 
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
