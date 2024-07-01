import express from "express";
import {
  deleteOrder,
  getAllOrders,
  getSingleOrder,
  myOrders,
  newOrder,
  updateOrder,
} from "../controllers/product-order.controller.js";
import { authorizeRole, isAuthenticatedUser } from "../middleware/auth.js";
const router = express();

router.post("/new", isAuthenticatedUser, newOrder);
router.route("/single/:id").get(isAuthenticatedUser, getSingleOrder);
router.route("/me").get(isAuthenticatedUser, myOrders);
router
  .route("/admin/all")
  .get(isAuthenticatedUser, authorizeRole("admin"), getAllOrders);
router
  .route("/admin/order/:id")
  .put(isAuthenticatedUser, authorizeRole("admin"), updateOrder)
  .delete(isAuthenticatedUser, authorizeRole("admin"), deleteOrder);

export default router;
