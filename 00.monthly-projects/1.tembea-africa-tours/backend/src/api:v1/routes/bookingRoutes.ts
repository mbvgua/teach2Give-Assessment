import {Router} from 'express'
import { addBooking, cancelBooking, deleteBooking, getBooking, getBookings, updateBooking } from '../controllers/bookingControllers'
// import { verifyToken } from '../middleware'

const bookingRouter = Router()

bookingRouter.post("",addBooking)
bookingRouter.get("",getBookings)
bookingRouter.get("/:id",getBooking)
bookingRouter.put("/:id",cancelBooking)
bookingRouter.put("/:id",updateBooking)
bookingRouter.delete("/:id",deleteBooking)

export default bookingRouter
