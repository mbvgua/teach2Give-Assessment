import {Router} from 'express'
import { addHotel, updateHotel, deleteHotel, getHotel, getHotels} from '../controllers/hotelControllers'
// import { verifyToken } from '../middleware'

const hotelRouter = Router()

hotelRouter.post("",addHotel)
hotelRouter.get("",getHotels)
hotelRouter.get("/:id",getHotel)
hotelRouter.put("/:id",updateHotel)
hotelRouter.delete("/:id",deleteHotel)

export default hotelRouter
