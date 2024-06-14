import express, {json} from 'express'
import productRouter from './routes/productRoutes'


const app = express()   // initialize the application

app.use(json())          //add a body to the requests


// add all the middlewares and urls
app.use("/products",productRouter)


// start the application
app.listen(4000,()=>{
    console.log('Wagwan. Server inarun...')
})
