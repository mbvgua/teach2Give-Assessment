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


// let messageOptions = {
//     to:process.env.MAIL_HOST ,
//     from:process.env.MAIL_HOST,
//     subject: "Experimental.ish",
//     html: '<h1> Top coder mwenyewe </h1>'
// }

// sendEmail(messageOptions)

ejs.renderFile("../../templates/register.ejs", {title:"Registration",
    name:"Hiro Nakamura",
    message:"Thanks for signing up for Nice App. We're very excited to have you on board.",
    confirmation_url : "www.diyeemm.com",
    company_name:"Kata Tenje Enterpreneurs"}, (err,data)=>{
        // console.log(data)
        // console.log(err) -> runs if not all placeholders are present

        let messageOptions = {
            to:process.env.MAIL_HOST ,
            from:process.env.MAIL_HOST,
            subject: "Better UI email",
            html: data
        }

        sendEmail(messageOptions)
})







// Thanks for signing up for Nice App. We're very excited to have you on board.