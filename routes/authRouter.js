import express from "express"
import { login, register } from "../controllers/authController.js";

const authRouter = express.Router();

// REGISTER
authRouter.post("/register", register);

// LOGIN
authRouter.post("/login", login);

export default authRouter;