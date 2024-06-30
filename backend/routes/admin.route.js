import express from "express";
import {
    deleteUser,
  getAllUser,
  getSingleUserDetails,
  updateUserRole,
} from "../controllers/user-controller/profile.controller.js";
import { authorizeRole, isAuthenticatedUser } from "../middleware/auth.js";

const router = express();

router.get("/users", isAuthenticatedUser, authorizeRole("admin"), getAllUser);
router
  .route("/user/:id")
  .get(isAuthenticatedUser, authorizeRole("admin"), getSingleUserDetails)
  .put(isAuthenticatedUser, authorizeRole("admin"), updateUserRole)
  .delete(isAuthenticatedUser, authorizeRole("admin"), deleteUser)

export default router;
