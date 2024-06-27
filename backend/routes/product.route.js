import express from "express";
import { createProduct } from "../controllers/product.controller.js";

const router = express();

router.post("/product",createProduct)

export default router;

