import {Router} from 'express'
import { addBooking, cancelBooking, deleteBooking, getBooking, getBookings, updateBooking } from '../controllers/bookingControllers'
import { verifyBookingToken } from '../middleware/bookingMiddleware'

const bookingRouter = Router()

bookingRouter.post("",addBooking)
bookingRouter.get("",verifyBookingToken, getBookings)
bookingRouter.get("/:id",getBooking)
bookingRouter.put("/:id",cancelBooking)
bookingRouter.put("/:id",updateBooking)
bookingRouter.delete("/:id",deleteBooking)

export default bookingRouter
