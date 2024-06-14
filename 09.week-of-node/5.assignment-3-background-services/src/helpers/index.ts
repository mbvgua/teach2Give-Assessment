import nodemailer from 'nodemailer'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config({path:path.resolve(__dirname,"../../.env")})
import ejs from 'ejs'

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
function createTransporter (config:any){    //
    return nodemailer.createTransport(config)
}

// 3.send the email
export async function sendEmail(messageOption:any){
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