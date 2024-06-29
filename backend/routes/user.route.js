import express from "express";
import { forgotPassword, loginUser, logoutUser, registerUser, resetPassword } from "../controllers/user.controller.js";


const router = express();

router.post("/register", registerUser)
router.post("/login", loginUser)
router.post("/logout", logoutUser)
router.post("/password/forgot", forgotPassword)
router.put("/password/reset/:token", resetPassword)

export default router;
