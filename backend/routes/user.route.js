import express from "express";
import { forgotPassword, loginUser, logoutUser, resetPassword, updateUserPassword } from "../controllers/user-controller/auth.controller.js";
import { getUserProfile, registerUser, updateUserProfile } from "../controllers/user-controller/profile.controller.js";
import {isAuthenticatedUser} from "../middleware/auth.js"

const router = express();

// profile
router.post("/register", registerUser)
router.get("/me", isAuthenticatedUser,getUserProfile)

// auth
router.post("/login", loginUser)
router.post("/logout",isAuthenticatedUser, logoutUser)
router.post("/password/forgot", forgotPassword)
router.put("/password/reset/:token", resetPassword)
router.put("/password/update",isAuthenticatedUser, updateUserPassword)
router.put("/me/update",isAuthenticatedUser, updateUserProfile)

export default router;
