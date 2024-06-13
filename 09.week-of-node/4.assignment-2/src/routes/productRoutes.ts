import {Router } from 'express'
import {getProduct, getProducts,addProduct,updateProduct,deleteProduct} from '../controllers/productsController'
import { verifyToken } from '../middleware'

const productRouter = Router()


productRouter.get("/:id",verifyToken, getProduct)
productRouter.get("",verifyToken, getProducts)
productRouter.post("",verifyToken, addProduct)
productRouter.put("/:id",verifyToken, updateProduct)
productRouter.delete("/:id",verifyToken, deleteProduct)


export default productRouter