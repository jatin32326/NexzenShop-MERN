import UserModel from "../models/userModels.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sendEmailFunc from "../config/sendEmail.js";
import VerificationEmail from "../utils/verifyEmailTemplate.js";
import generateAccessToken from "../utils/generateAccessToken.js";
import generateRefreshToken from "../utils/generateRefreshToken.js";
import dotenv from "dotenv";
dotenv.config()


import { v2 as cloudinary } from "cloudinary";
import fs from "fs";



cloudinary.config({
    cloud_name: process.env.cloudinary_Config_Cloud_Name,
    api_key: process.env.cloudinary_Config_api_key,
    api_secret: process.env.cloudinary_Config_api_Secret,
    secure: true,
})

// register user
export const registerUserController = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.status(404).json({
                message: "please provie name ,email and password",
                error: true,
                success: false
            })
        }

        let user = await UserModel.findOne({ email: email })
        if (user) {
            return res.status(409).json({
                message: "User already registered with this email",
                error: true,
                success: false,
            })
        }
        const verifycode = Math.floor(100000 + Math.random() * 900000).toString();

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        user = await UserModel({
            name: name,
            email: email,
            password: hashPassword,
            otp: verifycode,
            otpExpires: Date.now() + 600000
        })
        await user.save();

        //send verification Email

        await sendEmailFunc({
            to: email,
            subject: "verify email from Ecommerce App",
            text: "",
            html: VerificationEmail(name, verifycode)
        })
        // CREATE A JWT TOKEN FOR VERIFICATION PURPOSE
        const token = jwt.sign({
            email: user.email, id: user._id
        }, process.env.JWT_SECRET
        );

        return res.status(200).json({
            success: true,
            error: false,
            message: "You are registered successfully,Please verify your email.",
            token: token, // OPTINOAL: Include  this if needed for verification
        })


    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })

    }

}
// Verify email 
export const verifyEmailController = async (req, res) => {
    try {
        const { email, otp } = req.body
        let user = await UserModel.findOne({ email: email })
        if (!user) {
            return res.status(400).json({
                success: false,
                error: true,
                message: "user not found"
            })
        }
        const isCodeValid = String(user.otp)  === String(otp)
        const isNotExpired = user.otpExpires > Date.now()

        if (isCodeValid && isNotExpired) {
            user.verify_email = true;
            user.otp = null;
            user.otpExpires = null;
            await user.save()
            return res.status(200).json({ success: true, error: false, message: "Email verified Successfully" })
        } else if (!isCodeValid) {
            return res.status(400).json({ error: true, success: false, message: "Invalid Otp" })
        } else {
            return res.status(400).json({ error: true, success: false, message: "otp expired" })

        }


    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

// Login user controller

export const loginUserController = async (req, res) => {
    try {
        const { email, password } = req.body;

        let user = await UserModel.findOne({ email: email });

        if (!user) {
            return res.status(400).json({
                success: false,
                error: true,
                message: "user not register"
            })
        }

        if (user.status !== "Active") {
            return res.status(400).json({
                message: "contact to Admin",
                success: true,
                error: false,
            })
        }
        if (user.verify_email !== true) {
            return res.status(400).json({
                message: "Your Email is not verify yet please verify your email",
                success: true,
                error: false,
            })
        }
        const checkPassword = await bcrypt.compare(password, user.password);

        if (!checkPassword) {
            return res.status(400).json({
                message: "check your password",
                success: false,
                error: true
            })
        }
        const accessToken =  generateAccessToken(user._id)
        const refreshToken = await generateRefreshToken(user._id)

        const updateUser = await UserModel.findByIdAndUpdate(user?._id, {
            last_login_date: new Date()
        })

        const cookiesOption = {
            httpOnly: true,
            secure: true,
            sameSite: "None",
        }

        res.cookie('accessToken', accessToken, cookiesOption)
        res.cookie('refreshToken', refreshToken, cookiesOption)

        return res.status(200).json({
            message: "Login Successfully",
            success: true,
            error: false,
            data: {
                accessToken, refreshToken
            }
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            success: false,
            error: true
        })
    }
}
// Logout controller

export const logoutController = async (req, res) => {
    try {
        const userid = req.userId   // auth middleware

        const cookiesOption = {
            httpOnly: true,
            secure: true,
            sameSite: "None",
        }

        res.clearCookie('accessToken', cookiesOption)
        res.clearCookie('refreshToken', cookiesOption)

        const removeRefreshToken = await UserModel.findByIdAndUpdate(userid, {
            refresh_token: ""
        })

        return res.status(200).json({
            message: "Logout Successfully",
            error: false,
            success: true
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })

    }

}
// image upload
var imageArr = [];
export const userAvatarController = async (req, res) => {
    try {
        imageArr=[]
        const userId = req.userId;
        const image = req.files;

        const user = await UserModel.findOne({ _id: userId })
        if(!user){
            return res.status(500).json({
                message:"User Not Found",
                error:true,
                success:false
            })
        };

    // remove first image from cloudinary

    const imgUrl = user.avatar;

    const urlArr = imgUrl.split("/")
    const avatar_image = urlArr[urlArr.length - 1]

    const imageName =  avatar_image.split(".")[0]

    if (imageName) {
        const response = await cloudinary.uploader.destroy(
            imageName,
            (error, result) => {
                // console.log(error,response)

            }
        );
       
    }
            const options = {
                use_filename: true,
                unique_filename: false,
                overwrite: false
            }
            for (let i = 0; i < req?.files?.length; i++) {

                const img = await cloudinary.uploader.upload(
                    image[i].path,
                    options,
                    function (error, result) {
                        imageArr.push(result.secure_url);
                        fs.unlinkSync(`uploads/${req.files[i].filename}`);
                        // console.log(req.files[i].filename)

                    }
                );
            }

            user.avatar = imageArr[0]
            await user.save();

            return res.status(200).json({
                _id: userId,
                avatar: imageArr[0]
            });

        }
    catch (error) {
        return res.status(500).json({
            error: error.message || error,
            success: false,
            error: true
        });
    }

};
// remove Image from cloudinary

export const removeImageFromCloudinary = async (req, res) => {
    const imgUrl = req.query.img;

    const urlArr = imgUrl.split("/")
    const image = urlArr[urlArr.length - 1]

    const imageName = image.split(".")[0]

    if (imageName) {
        const response = await cloudinary.uploader.destroy(
            imageName,
            (error, result) => {
                // console.log(error,response)

            }
        );
        if (response) {
            res.status(200).send(response)
        }
    }
};

// update user details
export const updateUserDetails = async(req,res)=>{
    try{
        const userId = req.userId;  //auth middleware
        const{name,email,mobile,password}=req.body
        const userExist = await UserModel.findById(userId)
        
        if(!userExist)
            return res.status(400).send("The user cannot be updated")

        let verifyCode= "";
        if(email !== userExist.email){
            verifyCode = Math.floor(100000+Math.random()*900000).toString();

        }
        let hashPassword = "";
        if(password){
            const salt = await bcrypt.genSalt(10);
            hashPassword = await bcrypt.hash(password,salt)
        }else{
            hashPassword = userExist.password
        }

        const updateUser = await UserModel.findByIdAndUpdate(
            userId,{
                name:name,
                mobile:mobile,
                email:email,
                verify_email:email !== userExist.email ? false: true,
                password:hashPassword,
                otp:verifyCode!==""?verifyCode:null,
                otpExpires:verifyCode!==""?Date.now()+600000:''

            },
            {new:true}
        )

        if(email !== userExist.email){
            await sendEmailFunc({
                sendTo:email,
                subject:"verify email from Ecommerce App",
                html:VerificationEmail(name,verifyCode)
            })
        }
        return res.status(200).json({
            message:"user updated successfully",
            success:true,
            error:false,
            user:updateUser
        })

    }catch(error){
        return res.status(500).json({
            message:error.message||error,
            success:false,
            error:true
        })
    }

}
// Forgot password
export const forgotPasswordController=async(req,res)=>{
    try{
        const{email}=req.body;

        const user = await UserModel.findOne({email:email})

        if(!user){
            return res.status(400).json({
                message:"Email not available",
                success:true,
                error:false 
            })
        }
        let verifyCode = Math.floor(100000+Math.random()*900000).toString();

        user.otp = verifyCode;
        user.otpExpires = Date.now()+600000;

        await user.save();


        await sendEmailFunc({
            to:email,
            subject:"verify your Ecommerce App",
            text:"",
            html:VerificationEmail(user.name,verifyCode)

        })

        return res.json({
            message:"check your email",
            error:false,
            success:true
        })


    }catch(error){
        return res.status(500).json({
            message:error.message||error,
            success:true,
            error:false
        })

    }

}

// Verify Forgot password otp 
export const verifyForgetPasswordOtp=async(req,res)=>{
    try{
        const{email,otp}=req.body

        const user = await UserModel.findOne({email:email})

        if(!user){
            return res.status(400).json({
                message:"Email Not found",
                error:true,
                success:false
            })
        }

        if(!email || !otp){
            return res.status(400).json({
                message:"Provide required email,otp",
                success:false,
                error:true
            })
        }

        if(otp !== user.otp){
            return res.status(400).json({
                message:"Invalid otp",
                error:true,
                success:false
            })
        }

        const currentTime = new Date().toISOString()

        if(user.otpExpires < currentTime){
            return res.status(400).json({
                message:"otp is expired",
                error:true,
                success:false
            })
        }

        user.otp = "";
        user.otpExpires = "";

        await user.save();

        return res.status(200).json({
            message:"Verify OTP Successfully",
            error:false,
            success:true

        })
        

    }catch(error){
        return res.status(500).json({
            message:error.message||error,
            success:false,
            error:true
        })

    }
}

// reset password
export const resetPassword =async(req,res)=>{
    try{
        const {email,newPassword,confirmPassword}=req.body;
        if(!email || !newPassword || !confirmPassword){
            return res.status(400).json({
                message:"provide required fields email,newPassword,confirmPassword"
            })
        }
        const user = await UserModel.findOne({email:email});
        
        if(!user){
            return res.status(400).json({
                message:"Email is not available",
                error:true,
                success:false
            })
        }
        if(newPassword !== confirmPassword){
            return res.status(400).json({
                message:"newPassword and confirmPassword must be same",
                error:true,
                success:false
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(confirmPassword,salt)

       user.password = hashPassword;
       await user.save();

        return res.json({
            message:"Password updated successfully",
            error:false,
            success:true,
        })

    }catch(error){
        return res.status(500).json({
            message:error.message||error,
            error:true,
            success:false
        })

    }

}

// refresh token
export const refreshToken = async(req,res)=>{
    try{
        const refreshToken = req.cookies.refreshToken || req?.headers?.authorization?.split(" ")[1] //[Bearer Token]
       
        if(!refreshToken){
            return res.status(401).json({
                message:"Invalid Token",
                error:true,
                success:false,
            })
        }

        const verifyToken = await jwt.verify(refreshToken,process.env.SECRET_KEY_REFRESH_TOKEN)

        if(!verifyToken){
            return res.status(401).json({
                message:"token is expired",
                error:true,
                success:false,
            })
        }

        const userId = verifyToken?._id
        const newAccessToken = await generateAccessToken(userId)

        const cookiesOption = {
            httpOnly:true,
            secure:true,
            sameSite:"None"
        }
        res.cookie('accessToken',newAccessToken,cookiesOption)

        return res.json({
            message:"New Access Token generated",
            error:false,
            success:true,
            data:{
                accessToken:newAccessToken
            }
        })


    }catch(error){
        return res.status(500).json({
            message:error.message||error,
            error:true,
            success:false,
        })
    }
}

// Get user Details
export const userDetails = async(req,res)=>{
    try{
        const userId = req.userId
        
        const user = await UserModel.findById(userId).select('-password -refresh_token')

        return res.json({
            message:"user details",
            data:user,
            error:false,
            success:true

        })
    }catch(error){
        return res.status(500).json({
            message:"something is Wrong",
            error:true,
            success:false
        })
    }
}