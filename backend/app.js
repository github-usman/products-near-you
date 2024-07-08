import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectMongoDB from "./database/db.js";
import greeting from "./routes/greeting.route.js";
import product from "./routes/product.route.js";
import user from "./routes/user.route.js";
import admin from "./routes/admin.route.js";
import product_order from "./routes/product-order.route.js";
import { customErrorMiddleware } from "./middleware/error.js";

connectMongoDB();
const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// routes
app.use("/greeting", greeting);
app.use("/", product);
app.use("/user", user);
app.use("/admin", admin);
app.use("/product-order", product_order);

// Middleware for errors
app.use(customErrorMiddleware);

export default app;
