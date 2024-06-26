import express from "express";
import  greeting  from "./routes/greeting.route.js"

const app = express();
app.use("/greeting",greeting);

export default app;