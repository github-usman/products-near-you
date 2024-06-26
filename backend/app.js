import express from "express";
import  greeting  from "./routes/greeting.route.js"
import connectMongoDB from "./database/db.js"
connectMongoDB();
const app = express();
app.use("/greeting",greeting);

export default app;