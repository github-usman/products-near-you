import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProductDetails,
  getProductDetails,
  updateProduct,
} from "../controllers/product.controller.js";
import isAuthenticatedUser from "../middleware/auth.js";

const router = express();

router.get("/products", getAllProductDetails);
router.post("/product", isAuthenticatedUser, createProduct);
router
  .route("/product/:id")
  .put(isAuthenticatedUser, updateProduct)
  .delete(isAuthenticatedUser, deleteProduct)
  .get(getProductDetails);

export default router;
