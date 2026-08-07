import sendEmail from "./emailService.js";


const sendEmailFunc=async({to,subject,text,html})=>{
    const result= await sendEmail(to,subject,text,html);
    if(result.success){
        return true;
        // res.status(200).json({message:"Email send successfully",message})
    }
    else{
        return false;
        // res.status().json({message:"Failed to send Email",error})
    }

}

export default sendEmailFunc