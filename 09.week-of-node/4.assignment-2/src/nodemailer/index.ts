import nodemailer from 'nodemailer'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config({path:path.resolve(__dirname,"../../.env")})

// 1.create a configuration object
let configObject = {
    host: "smtp.gmail.com",
    service: "gmail",
    port: 587,
    auth :{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD 
    }
}

// 2.create a transporter
function createTransporter (config:any){    //
    return nodemailer.createTransport(config)
}

// 3.send the email
async function sendEmail(messageOption:any){
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


let messageOptions = {
    to:process.env.EMAIL,
    from:process.env.EMAIL,
    subject: "Experimental.ish",
    html: '<h1> Niaje mahn </h1>'
}

sendEmail(messageOptions)