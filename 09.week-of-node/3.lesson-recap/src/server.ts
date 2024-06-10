// const express = require('express') -> no type support
import express,{Request, Response, NextFunction} from 'express'

const app = express()

// start with a get request
// app.get("/products", (request:Request, response:Response, next:NextFunction)=>{
app.get("/products", (request:Request, response:Response)=>{
    // console.log('hello world')
    response.status(200).send('Hello World')
})


app.listen(4000,()=>{
    console.log('App inarun buda...')
})