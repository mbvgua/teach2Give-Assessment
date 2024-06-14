import {Router } from 'express'
import {getProduct, getProducts,addProduct,deleteProduct, searchProduct, paginateProducts} from '../controllers/productController'

const productRouter = Router()

productRouter.post("", addProduct)
productRouter.get("", getProducts)
productRouter.get("/search", searchProduct)
productRouter.get("/filter", paginateProducts) 
// get request had an issue. : acted as a wildcard. moving to bottom fixed that
productRouter.get("/:id", getProduct)
productRouter.delete("/:id", deleteProduct)


export default productRouter