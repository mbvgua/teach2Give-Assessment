import express from 'express'
import cron from 'node-cron'
import { run } from './emailService';

const app = express()

cron.schedule('*/5 * * * * *', async () => {
    // '*/5 * * * * *' -> runs after every 5 seconds
    // ''*/5 * * * *' -> runs after every 5 minutes
    // '0 * * * *' -> runs after every hour
    await run()

});

app.listen(4001,()=>{
    console.log('Very nice. Server is running...')
})