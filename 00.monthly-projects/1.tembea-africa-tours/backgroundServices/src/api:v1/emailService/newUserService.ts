import mssql from 'mssql'
import ejs from 'ejs'
import { sqlConfig } from '../../config'
import { UserEmail } from '../models/userModels'
import { sendUserEmail } from '../helpers'



export async function newUser(){
    try{
        console.log('Running on a loop every 5 secs.. ')
        // let pool = await mssql.connect(sqlConfig)
        // let users = (await pool.request()
        // // .query("SELECT * FROM users WHERE dbo.users.isEmailSent = 0"))  //->change to stored procedure
        // .execute('getEmailNotSent'))
        // .recordset as Array<User>

        // // console.log(users)
        // users.forEach( (user)=>{
        //     // ejs.renderFile("../../templates/register.ejs" -> did not work!!!
        //     ejs.renderFile("templates/register.ejs", {title:"Registration Success!",
        //         name:user.u_name,
        //         message:"Thanks for signing up for e-commerce. We're very excited to have you on board.",
        //         confirmation_url : "www.teach2give.com",
        //         company_name:"Dream Weavers"},
        //         async (err,data)=>{
        //         // console.log(data) //->display s name well
        //         // console.log(err) //-> runs if not all placeholders are present

        // let messageOptions = {
        //     to:user.email,
        //     from:process.env.MAIL_HOST,
        //     subject: "Mambo ni Laivu",
        //     html: data
        // }

        // sendEmail(messageOptions) //send email to

        // // update emails sent to -> uncomment if it works?
        // await pool.request()
        // .input('email',user.email)
        // .execute('updateEmailSent')
        // // .query(`UPDATE users SET isEmailSent = 1 WHERE id='${user.id}'`)
        // })
        // console.log('eureka!')
        // }) 

    } catch(error) {
        console.log(error)
    }
}