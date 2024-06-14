import {Router} from 'express'
import {addCategory, getCategory,getCategories} from '../controllers/categoriesController'
import { verifyToken } from '../middleware'

const categoriesRouter = Router()

categoriesRouter.post("",verifyToken, addCategory)
categoriesRouter.get("",verifyToken, getCategories)
categoriesRouter.get("/:id",verifyToken, getCategory)


export default categoriesRouter