import express from "express";
import authUser from "../middlewares/auth.user.middleware.js";
import authSeller from "../middlewares/auth.seller.middleware.js";
import {
  placeOrderCod,
  placeOrderStripe,
  getUserOrders,
  getAllOrders,
} from "../controllers/order.controller.js";

const orderRouter = express.Router();

orderRouter.post("/cod", authUser, placeOrderCod);
orderRouter.post("/stripe", authUser, placeOrderStripe);
orderRouter.get("/user", authUser, getUserOrders);
orderRouter.get("/seller", authSeller, getAllOrders);

export default orderRouter;
