import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import connectMongoDB from "./database/db.js"
import  greeting  from "./routes/greeting.route.js"
import  product  from "./routes/product.route.js"
import  user  from "./routes/user.route.js"
import  admin  from "./routes/admin.route.js"
import { customErrorMiddleware } from "./middleware/error.js";

connectMongoDB();
const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

// routes
app.use("/greeting",greeting);
app.use("/",product);
app.use("/user",user);
app.use("/admin",admin);


// Middleware for errors
app.use(customErrorMiddleware)

export default app;