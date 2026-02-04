import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router  from "./ROUTES/userRoute.js";
import cors from "cors";
import bodyParser from "body-parser";


dotenv.config();


const PORT=process.env.PORT;
const MONGO_URL=process.env.MONGO_URL;
const app=express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors({origin:'*'}));
app.get("/vasudha",(req,res)=>{res.send("hello")})
app.use('/api',router);


mongoose.connect(MONGO_URL)
.then(()=>{console.log("connected to mongodb");
    app.listen(PORT,()=>{console.log(`server is running on http://localhost:${PORT}`)})
}
)
.catch()

