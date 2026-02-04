import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./ROUTES/userRoute.js";
import cors from "cors";
import bodyParser from "body-parser";
dotenv.config();
const PORT = process.env.PORT;
const MONGOO_URL=process.env.MONGOO_URL;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: '*' }));
app.use('/api',router);
app.get("/arpita",(req,res)=>{res.send("hello")})
mongoose.connect(MONGOO_URL)
.then(()=>{console.log("connected to mongoodb");
    app.listen(PORT,()=>{console.log(`server is running on http://localhost:${PORT}`)})
})
.catch()