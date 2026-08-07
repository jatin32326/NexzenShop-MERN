import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config()


 export const auth = (req,res,next)=>{
    try{
            let token = req.cookies.accessToken || req.headers.authorization?.split(" ")
            [1];

            if(!token){
                token = req.query.token;
            }


            // console.log(token)

            if(!token){
                return res.status(401).json({
                    message:"provide token"
                })
            }
            const decode =  jwt.verify(token,process.env.SECRET_KEY_ACCESS_TOKEN)

            if(!decode){
                return res.status(401).json({
                    message:"unauthorized access",
                    error:true,
                    success:false
                })
            }
            req.userId=decode.id

            next()
    }
    catch(error){
        return res.status(500).json({
            message:"You have not login",
            error:true,
            success:false,
        })
        
    }
}