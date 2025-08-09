import express from "express";
import {
  register,
  login,
  isAuth,
  logout,
} from "../controllers/user.controller.js";
import authUser from "../middlewares/auth.user.middleware.js";

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/is-auth", authUser, isAuth);
userRouter.get("/logout", authUser, logout);

export default userRouter;
