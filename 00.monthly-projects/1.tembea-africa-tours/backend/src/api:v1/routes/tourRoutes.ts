import {Router} from 'express'
import { addTour, deleteTour, getTour, getTours, updateTour } from '../controllers/tourControllers'
// import { verifyToken } from '../middleware'

const tourRouter = Router()

tourRouter.post("",addTour)
tourRouter.get("",getTours)
tourRouter.get("/:id",getTour)
tourRouter.put("/:id",updateTour)
tourRouter.delete("/:id",deleteTour)

export default tourRouter
