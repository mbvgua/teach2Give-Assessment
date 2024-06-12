import {Router} from 'express'
import { deleteUser, getUser, getUsers, loginUser, registerUser } from '../controllers/authController'

const authRouter = Router()

authRouter.post("/register",registerUser)
authRouter.post("/login",loginUser)
authRouter.get("/users",getUsers)
authRouter.get("/user",getUser)
// authRouter.put("/:id",updateUser)
authRouter.delete("/:id",deleteUser)

export default authRouter
