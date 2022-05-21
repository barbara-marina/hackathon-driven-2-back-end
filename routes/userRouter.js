import { Router } from "express";
import { getTheQuestions, getUserData } from "../controllers/userControllers.js";
import validateToken  from "../middlewares/tokenMiddleware.js";

const userRouter = Router();

userRouter.get("/user", validateToken, getUserData);
userRouter.get("/questions", validateToken, getTheQuestions);

export default userRouter;