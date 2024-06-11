import express, {json} from 'express'

// initialize the application
const app = express()
app.use(json()) //add a body to the requests


app.listen(4000,()=>{
    console.log('Wagwan. Server inarun...')
})
