import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import connectDb from "./config/Db.js";
import userRouter from "./routes/user.router.js";
import categoryRouter from "./routes/category.router.js";
import productRouter from "./routes/product.router.js";
import cartRouter from "./routes/cart.router.js";
import MyListRouter from "./routes/mylist.router.js";



const app=express();
const port=process.env.PORT;

app.use(cors())
// app.options('*',cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())
app.use(morgan())
app.use(helmet({
    crossOriginResourcePolicy:false
}))



app.use("/api/user",userRouter)
app.use("/api/category",categoryRouter)
app.use("/api/product",productRouter)
app.use("/api/cart",cartRouter)
app.use("/api/mylist",MyListRouter)


connectDb().then(()=>{
    console.log("DB connected successfully")

    app.listen(port,()=>{
        console.log(`server is running on ${port}`);
    }); 
     
}).catch((error)=>{
    console.log("Db not connected",error)
})