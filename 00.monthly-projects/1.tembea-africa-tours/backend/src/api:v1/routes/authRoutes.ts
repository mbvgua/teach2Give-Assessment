import {Router} from 'express'
import { registerUser, loginUser, updateUser, deleteUser, getUser, getUsers} from '../controllers/authControllers'
// import { verifyToken } from '../middleware'

const authRouter = Router()

authRouter.post("/register",registerUser)
authRouter.post("/login",loginUser)
authRouter.get("/users",getUsers)
authRouter.get("/:id",getUser)
authRouter.put("/:id",updateUser)
authRouter.delete("/:id",deleteUser)
// authRouter.post("/register",registerUser)
// authRouter.post("/login",verifyToken,loginUser)
// authRouter.get("/users",verifyToken,getUsers)
// authRouter.get("/user",verifyToken,getUser)
// authRouter.put("/:id",updateUser)
// authRouter.delete("/:id",verifyToken,deleteUser)

export default authRouter
