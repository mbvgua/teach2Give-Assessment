import mssql from 'mssql'
import ejs from 'ejs'
import { sqlConfig } from '../config'
import { User } from '../models/userModels'
import { sendEmail } from '../helpers'



export async function run(){
    try{
        // console.log('Running on a loop every 5 secs.. ')
        let pool = await mssql.connect(sqlConfig)
        let users = (await pool.request()
        // .query("SELECT * FROM users WHERE dbo.users.isEmailSent = 0"))  //->change to stored procedure
        .execute('getEmailNotSent'))
        .recordset as Array<User>

        // console.log(users)
        users.forEach( (user)=>{
            // ejs.renderFile("../../templates/register.ejs" -> did not work!!!
            ejs.renderFile("templates/register.ejs", {title:"Registration",
                name:user.u_name,
                message:"Thanks for signing up for Nice App. We're very excited to have you on board.",
                confirmation_url : "www.diyeemm.com",
                company_name:"Kata Tenje Enterpreneurs"},
                async (err,data)=>{
                // console.log(data) //->display s name well
                // console.log(err) //-> runs if not all placeholders are present

        let messageOptions = {
            to:user.email,
            from:process.env.MAIL_HOST,
            subject: "Mambo ni Laivu",
            html: data
        }

        sendEmail(messageOptions) //send email to

        // update emails sent to -> uncomment if it works?
        await pool.request()
        .input('email',user.email)
        .execute('updateEmailSent')
        // .query(`UPDATE users SET isEmailSent = 1 WHERE id='${user.id}'`)
        })
        console.log('eureka!')
        }) 

    } catch(error) {
        console.log(error)
    }
}