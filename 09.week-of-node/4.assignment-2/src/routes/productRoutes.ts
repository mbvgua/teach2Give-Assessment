import {Router } from 'express'
import {getProduct, getProducts,addProduct,updateProduct,deleteProduct} from '../controllers/productsController'

const productRouter = Router()


productRouter.get("/:id", getProduct)
productRouter.get("", getProducts)
productRouter.post("", addProduct)
productRouter.put("/:id", updateProduct)
productRouter.delete("/:id", deleteProduct)


export default productRouter