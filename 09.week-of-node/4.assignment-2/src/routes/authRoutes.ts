import {Router} from 'express'
import { deleteUser, getUser, getUsers, loginUser, registerUser } from '../controllers/authController'
import { verifyToken } from '../middleware'

const authRouter = Router()

authRouter.post("/register",registerUser)
authRouter.post("/login",verifyToken,loginUser)
authRouter.get("/users",verifyToken,getUsers)
authRouter.get("/user",verifyToken,getUser)
// authRouter.put("/:id",updateUser)
authRouter.delete("/:id",verifyToken,deleteUser)

export default authRouter
