import express from "express";
import {
  addProduct,
  productList,
  productById,
  changeStock,
} from "../controllers/product.controller.js";
import { upload } from "../configs/multer.js";
import authSeller from "../middlewares/auth.seller.middleware.js";

const productRouter = express.Router();

productRouter.post("/add", upload.array(["images"]), authSeller, addProduct);
productRouter.get("/list", productList);
productRouter.get("/id", productById);
productRouter.post("/stock", authSeller, changeStock);

export default productRouter;
