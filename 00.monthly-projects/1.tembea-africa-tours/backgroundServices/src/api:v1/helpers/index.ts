import nodemailer from 'nodemailer'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config({path:path.resolve(__dirname,"../../.env")})
import { BookingEmail, ConfigDetails } from '../models/bookingModels'
import { UserEmail } from '../models/userModels'


// 1.create a configuration object
let configObject = {
    host: "smtp.gmail.com",
    service: "gmail",
    port: 587,
    auth :{
        user:process.env.MAIL_HOST,
        pass:process.env.SMTP_PASSWORD 
    }
}

// 2.create a transporter
function createTransporter (config:ConfigDetails){   
    return nodemailer.createTransport(config)
}

//send the user email
export async function sendUserEmail(messageOption:UserEmail){
    let transporter = createTransporter(configObject)
    await transporter.verify()

    await transporter.sendMail(messageOption, (error,info)=>{
        if (error){
            console.log(error)
        } else {
            console.log(info)
        }
    })
}

// send booking email
export async function sendBookingEmail(messageOption:BookingEmail){
    let transporter = createTransporter(configObject)
    await transporter.verify()

    await transporter.sendMail(messageOption, (error,info)=>{
        if (error){
            console.log(error)
        } else {
            console.log(info)
        }
    })
}