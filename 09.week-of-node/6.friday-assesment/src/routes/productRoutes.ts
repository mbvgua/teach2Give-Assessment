import {Router } from 'express'
import {getProduct, getProducts,addProduct,deleteProduct, searchProduct, paginateProducts} from '../controllers/productController'

const productRouter = Router()

// 
productRouter.post("", addProduct)
productRouter.get("/:id", getProduct)
productRouter.get("", getProducts)
productRouter.get("/search ", searchProduct)
productRouter.get("/filter", paginateProducts) 
productRouter.delete("/:id", deleteProduct)


export default productRouter