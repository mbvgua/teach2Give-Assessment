import {Router} from 'express'
import { addTour, deleteTour, getTour, getTours, updateTour } from '../controllers/tourControllers'
import { verifyTourToken } from '../middleware/tourMiddleware'

const tourRouter = Router()

tourRouter.post("",verifyTourToken,addTour)
tourRouter.get("",getTours)
tourRouter.get("/:id",verifyTourToken,getTour)
tourRouter.put("/:id",verifyTourToken,updateTour)
tourRouter.delete("/:id",verifyTourToken,deleteTour)

export default tourRouter
