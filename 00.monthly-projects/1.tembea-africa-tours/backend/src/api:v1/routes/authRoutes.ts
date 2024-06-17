import {Router} from 'express'
import { registerUser, updateUser, deleteUser, getUser, getUsers} from '../controllers/authControllers'
import { verifyAuthToken } from '../middleware/authMiddleware'

const authRouter = Router()

authRouter.post("/register",registerUser)
authRouter.get("/users",verifyAuthToken,getUsers)
authRouter.get("/:id",getUser)
authRouter.put("/:id",updateUser)
authRouter.delete("/:id",verifyAuthToken,deleteUser)


export default authRouter
