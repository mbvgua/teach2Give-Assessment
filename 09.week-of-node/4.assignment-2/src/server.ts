import express, {json} from 'express'
import productRouter from './routes/productRoutes'
import categoriesRouter from './routes/categoryRoutes'


const app = express()   // initialize the application

app.use(json())          //add a body to the requests


// add all the middlewares and urls
app.use("/products",productRouter)
app.use("/catgories", categoriesRouter)


// start the application
app.listen(4000,()=>{
    console.log('Wagwan. Server inarun...')
})
