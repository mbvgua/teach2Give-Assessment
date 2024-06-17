import mssql from 'mssql'
import ejs from 'ejs'
import { sqlConfig } from '../../config'
import { UserEmail,User } from '../models/userModels'
import { sendUserEmail } from '../helpers'



export async function newUser(){
    try{
        // console.log('Running on a loop every 5 secs.. ')
        let pool = await mssql.connect(sqlConfig)
        let users = (await pool.request()
        .execute('getNewUser'))
        .recordset as Array<User>

        // console.log(users) //-> confirm code is get the users it should send email to
        users.forEach( (user)=>{
            // ejs.renderFile("../../templates/register.ejs" -> did not work!!!
            ejs.renderFile("templates/register.ejs", {title:"Registration Success!",
                name:user.u_name,
                message:"Thanks for signing up to our website. We're very excited to have you on board.",
                confirmation_url : "www.tembeafrica.co.ke",
                company_name:"Tembea Africa Safaris"},
                async (err,data)=>{

        let messageOptions = {
            to:user.u_email,
            from:process.env.MAIL_HOST,
            subject: "Getting Started",
            html: data
        }

        sendUserEmail(messageOptions) 

        // update emails sent to prevent continous loop
        await pool.request()
        .input('id',user.id)
        .execute('updateUserEmailSent')
        })
        console.log('Completed sending emails to new users!')
        }) 

    } catch(error) {
        console.log(error)
    }
}