import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()



if(!process.env.MONGO_URL){
    throw new Error(
        "please provide MONGO_URL in the .env file"
    )
}

async function connectDb(){
        await mongoose.connect(process.env.MONGO_URL)
    }


export default connectDb;