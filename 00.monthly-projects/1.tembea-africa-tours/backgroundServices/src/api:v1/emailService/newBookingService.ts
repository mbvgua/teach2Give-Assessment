import ejs from 'ejs'
import { Booking, BookingEmail } from '../models/bookingModels'
import { sendBookingEmail } from '../helpers'
import { DbHelper } from '../databaseHelpers'

// instatitate the database helpers class
const dbInstance = new DbHelper()


export async function newBooking(){
    try{
        // console.log('Running on a loop every 5 secs.. ')
        let bookings = (await dbInstance.get('getNewBooking')).recordset as Array<Booking>

        // console.log(bookings)
        bookings.forEach( async (booking)=>{

            // procedure to get the username from the user id

            let user = (await dbInstance.exec('getUserName',{
                id:booking.user_id
            })).recordset[0]
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
        await dbInstance.exec('updateBookingEmailSent',{
            id:booking.id
        })

        })
        console.log('All Bookings have been sent succesfully!')
        }) 

    } catch(error) {
        console.log(error)
    }
}