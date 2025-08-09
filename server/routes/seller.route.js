import express from "express";
import {
  sellerLogin,
  isSellerAuth,
  sellerLogout,
} from "../controllers/seller.controller.js";
import authSeller from "../middlewares/auth.seller.middleware.js";

const sellerRouter = express.Router();

sellerRouter.post("/login", sellerLogin);
sellerRouter.get("/isAuth", authSeller, isSellerAuth);
sellerRouter.get("/logout", sellerLogout);

export default sellerRouter;
