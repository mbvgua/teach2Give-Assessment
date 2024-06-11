import {Router } from 'express'
import {addProduct,getProduct,getProducts,updateProducts,deleteProducts} from '../controllers'

const router = Router()

router.get('',getProducts)
router.get('/:id',getProduct)
router.post('',addProduct)
router.put('/:id',updateProducts)
router.delete('/:id',deleteProducts)

export default router   //keyword default prevents destructuring when importing.
//no need to use curly braces as you used default to export