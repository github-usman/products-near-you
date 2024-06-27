import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

const router = express();

router.post("/product", createProduct)
router.get("/products", getProducts)
router.put("/product/:id", updateProduct)
router.delete("/product/:id", deleteProduct)

export default router;

