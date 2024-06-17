import {Router} from 'express'
import { addHotel, updateHotel, deleteHotel, getHotel, getHotels} from '../controllers/hotelControllers'
import { verifyHotelToken } from '../middleware/hotelMiddleware'

const hotelRouter = Router()

hotelRouter.post("",verifyHotelToken,addHotel)
hotelRouter.get("",getHotels)
hotelRouter.get("/:id",verifyHotelToken,getHotel)
hotelRouter.put("/:id",verifyHotelToken,updateHotel)
hotelRouter.delete("/:id",verifyHotelToken,deleteHotel)

export default hotelRouter
