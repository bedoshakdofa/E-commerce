import express from "express";
import * as authController from "../controller/auth.js";

const authRouter = express.Router();

authRouter.post("/signUp", authController.signUp);
authRouter.post("/signIn", authController.signIn);

export default authRouter;
