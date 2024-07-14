import express from "express";
import {
  createProduct,
  createProductReview,
  deleteProduct,
  deleteReview,
  getAllProductDetails,
  getProductDetails,
  getProductReviews,
  updateProduct,
} from "../controllers/product.controller.js";
import { authorizeRole, isAuthenticatedUser } from "../middleware/auth.js";

const router = express();

router.get("/products", getAllProductDetails);
router.post(
  "/new-products",
  isAuthenticatedUser,
  authorizeRole("admin"),
  createProduct
);
router
  .route("/product/:id")
  .put(isAuthenticatedUser, authorizeRole("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizeRole("admin"), deleteProduct)
  .get(getProductDetails);

router
  .route("/product-re/review")
  .put(isAuthenticatedUser, createProductReview)
  .get(getProductReviews)
  .delete(isAuthenticatedUser, deleteReview);

export default router;
