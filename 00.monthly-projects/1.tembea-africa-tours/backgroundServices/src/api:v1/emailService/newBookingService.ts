import mssql from 'mssql'
import ejs from 'ejs'
import { sqlConfig } from '../../config'
import { Booking, BookingEmail } from '../models/bookingModels'
import { sendBookingEmail } from '../helpers'



export async function newBooking(){
    try{
        // console.log('Running on a loop every 5 secs.. ')
        let pool = await mssql.connect(sqlConfig)
        let bookings = (await pool.request()
        .execute('getNewBooking'))
        .recordset as Array<Booking>

        // console.log(bookings)
        bookings.forEach( async (booking)=>{

            // procedure to get the username from the user id
            let user = (await pool.request()
            .input('id',booking.user_id)
            .execute('getUserName')).recordset[0]
            // console.log(user.u_name)
            // console.log(user.u_email)

            ejs.renderFile("templates/register.ejs", {title:"New Booking Added!",
                name:user.u_name,
                message:"Thanks for booking a tour with Tembea Africa Safaris. We look forward to seeing you soon!",
                confirmation_url : "www.tembeaafrica.com",
                company_name:"Tembea Africa Safaris"},
                async (err,data)=>{
                // console.log(data) //->display s name well
                // console.log(err) //-> runs if not all placeholders are present

            let messageOptions = {
                to:user.u_email,
                from:process.env.MAIL_HOST,
                subject: "Now Leave the rest to Us!",
                html: data
            }

        sendBookingEmail(messageOptions) //send email to

        // update emails sent to -to avoid infinite loop
        await pool.request()
        .input('id',booking.id)
        .execute('updateBookingEmailSent')
        })
        console.log('All Bookings hav been sent succesfully!')
        }) 

    } catch(error) {
        console.log(error)
    }
}