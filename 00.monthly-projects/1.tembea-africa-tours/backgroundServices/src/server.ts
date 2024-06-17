import express from 'express'
import cron from 'node-cron'
import { newUser } from './api:v1/emailService/newUserService';
import { newBooking } from './api:v1/emailService/newBookingService';

const app = express()

// configure server to run after every 5 minutes
cron.schedule('*/5 * * * *', async () => {
    // '*/5 * * * * *' -> runs after every 5 seconds
 
    await newUser()
    await newBooking()

});


// start the application
app.listen(4001,()=>{
    console.log('backGround Server is up!!...')
})
