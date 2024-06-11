// const express = require('express') -> no type support
import express,{json} from 'express'
import router from './routes'


const app = express()
app.use(json())
app.use("/products", router)    //better to give path here once to eliminate repetitiveness


app.listen(4000,()=>{
    console.log('App inarun buda...')
})