import http from "http"
import  nodemailer from "nodemailer"
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:465,  //for secure
    secure:true, // true for port 465 false for other ports
    auth:{
        user:process.env.EMAIL,  //your smtp username
        pass:process.env.EMAIL_PASS  //your stmp password

    } 
});

async function sendEmail(to,subject,text,html){
    try{
        const info =await transporter.sendMail({
            from:`"NexZenShop"<${process.env.EMAIL}>`,
            to,
            subject,
            text,
            html
        });
        return {success:true,messageId:info.messageId}
    }
    catch(error){
        console.error("error sending email",error);
        return {success:false,error:error.message}
    }
}

export default sendEmail