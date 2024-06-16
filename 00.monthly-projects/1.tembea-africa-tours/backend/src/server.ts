import express, {json} from 'express'


const app = express()   // initialize the application

app.use(json())          //add a body to the requests


// start the application
app.listen(4000,()=>{
    console.log('Wagwan. Server inarun...')
})
