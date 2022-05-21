import { Router } from "express";
import { logOut, signIn, signUp } from "../controllers/authControllers.js";
import getQuestionsController from "../controllers/getQuestionsController.js";
import validateToken  from "../middlewares/tokenMiddleware.js";
import validateSignIn from "./../middlewares/signInMiddleware.js";
import validateSignUp from "./../middlewares/signUpMiddleware.js";

const authRouter = Router();
authRouter.post("/sign-up", validateSignUp, signUp);
authRouter.post("/sign-in", validateSignIn, signIn);
authRouter.delete("/log-out", validateToken, logOut)
authRouter.get('/questions', getQuestionsController);
export default authRouter;