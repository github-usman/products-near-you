import express from "express";
import bodyParser from "body-parser";
import connectMongoDB from "./database/db.js"
import  greeting  from "./routes/greeting.route.js"
import  product  from "./routes/product.route.js"

connectMongoDB();
const app = express();
app.use(bodyParser.json());

// routes
app.use("/greeting",greeting);
app.use("/",product);

export default app;