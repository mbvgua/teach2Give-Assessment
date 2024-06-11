// const express = require('express') -> no type support
import express,{Request, Response, NextFunction, json} from 'express'
import { Product, addProduct, productBody } from './models'


const app = express()
app.use(json())

// create the products array
const products: Array<Product> = []


// start with a get request
// app.get("/products", (request:Request, response:Response, next:NextFunction)=>{
app.get("/products", (request:Request, response:Response)=>{
    // console.log('hello world')
    response.status(200).send(products)
})



// get request of a specific id
app.get("/products/:id", (request:Request<{id:string}>, response:Response)=>{
    const id = +request.params.id

    // response.status(200).json(id)
    let product = products.find(x=> x.id===id)

    if (product != undefined){
        return response.status(200).send(product)
    } 
    
    return response.status(404).send({message:"product is not available"})
})



// create request
app.post("/products", (request:productBody, response:Response)=>{
    // console.log(request.body)

    const {title,description,price} = request.body

    let newProduct: Product = {
        id: Math.floor(Math.random()*10000),
        title,
        description,
        price
    }

    products.push(newProduct)
    console.log(products)
    response.status(201).send({message: 'New product added succesfully'})
})



app.put("/products/:id",(request:Request<{id:string}>, response:Response)=>{
    const id = +request.params.id   //get the id. use unary oparator to convert to number
    let product = products.find(x=> x.id===id)  //match the exact id

    let {title,description,price} = request.body
    // console.log(request.body)   
    // console.log(title,description,price)    

    if (product != undefined){
        product.title = title
        product.description = description
        product.price = price
        return response.status(200).send({message:` Product ${id} is updated`})
    } 
    
    return response.status(404).send({message:"product is not available"})
})


// delete
app.delete("/products/:id", (request:Request<{id:string}>, response:Response)=>{
    const id = +request.params.id
    let index = products.findIndex(x=> x.id===id)   //if not it returns -1

    if (index>=0){  //allows -1 to be handles by the else case

        products.splice(index,1)    //remove the specific value from the arry
        return response.status(200).send({message:` Product ${id} was deleted`})
    } 
    
    return response.status(404).send({message:"product is not available"})
})



app.listen(4000,()=>{
    console.log('App inarun buda...')
})