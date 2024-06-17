import ejs from 'ejs'
import { User } from '../models/userModels'
import { sendUserEmail } from '../helpers'
import { DbHelper } from '../databaseHelpers'

// instatitate the database helpers class
const dbInstance = new DbHelper()


export async function newUser(){
    try{
        // console.log('Running on a loop every 5 secs.. ')
        let users = (await dbInstance.get('getNewUser')).recordset as Array<User>        

        // console.log(users) //-> confirm code gets the users it should send email to
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
        await dbInstance.exec('updateUserEmailSent',{
            id:user.id
        })
    
        })
        console.log('Completed sending emails to all new users!')
        }) 

    } catch(error) {
        console.log('An error occured:',error)
    }
}