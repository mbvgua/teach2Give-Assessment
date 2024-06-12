import {Router} from 'express'
import {addCategory, getCategory,getCategories} from '../controllers/categoriesController'

const categoriesRouter = Router()

categoriesRouter.post("", addCategory)
categoriesRouter.get("", getCategories)
categoriesRouter.get("/:id", getCategory)


export default categoriesRouter