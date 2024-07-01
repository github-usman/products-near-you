import express from "express";
import { greeting } from "../controllers/greeting.controller.js";
const router = express();

router.get("", greeting);

export default router;
