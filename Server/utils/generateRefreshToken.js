import UserModel from "../models/userModels.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config()

const generateRefreshToken = async(userId)=>{
    const token = jwt.sign(
        {id:userId},
        process.env.SECRET_KEY_REFRESH_TOKEN,
        {expiresIn:"30d"}
    )
    const updateRefreshTokenUser = await UserModel.updateOne(
        { _id:userId },
        {
            refresh_token : token
        }
    )
    return token
}

export default generateRefreshToken