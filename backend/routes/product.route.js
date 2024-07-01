import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProductDetails,
  getProductDetails,
  updateProduct,
} from "../controllers/product.controller.js";
import { authorizeRole, isAuthenticatedUser } from "../middleware/auth.js";

const router = express();

router.get("/products", getAllProductDetails);
router.post(
  "/product",
  isAuthenticatedUser,
  authorizeRole("admin"),
  createProduct
);
router
  .route("/product/:id")
  .put(isAuthenticatedUser, authorizeRole("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizeRole("admin"), deleteProduct)
  .get(getProductDetails);

export default router;
