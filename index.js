import express from "express";
import dotenv from "dotenv";
import path from "path";
const configPath = path.resolve("config","uat.env")

dotenv.config({path:configPath});
// import cookieParser from "cookie-parser";

import productRouter from "./src/routes/productRoutes.js";



const app = express();
app.use(express.json());
// app.use(cookieParser());

app.use("/api/admin/products",productRouter)

app.get("/",(req,res)=>{
    res.send("welcome to ecom-API")
})

export default app;