import express, {json} from 'express'
import authRouter from './api:v1/routes/authRoutes'
import hotelRouter from './api:v1/routes/hotelRoutes'


const app = express()   // initialize the application

app.use(json())          //add a body to the requests

// add middleware and respective urls
app.use("/auth", authRouter)
app.use("/hotels",hotelRouter)


// start the application
app.listen(4000,()=>{
    console.log('Wagwan. Server inarun...')
})
