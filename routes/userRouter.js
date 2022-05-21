import { Router } from "express";
import { getUserData } from "../controllers/userControllers.js";
import validateToken  from "../middlewares/tokenMiddleware.js";

const userRouter = Router();

userRouter.get("/user", validateToken, getUserData)

export default userRouter;