import React, { useContext, useEffect } from 'react'
import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import Button from '@mui/material/Button';
import { postData } from '../../utils/api';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../App';



const Verify = () => {

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

    const history = useNavigate();
    const context = useContext(MyContext)


  const verifyOtp =(e)=>{
    e.preventDefault();

    const actionType = localStorage.getItem("actionType")

    const otpValue = otp.join("");

    if (otpValue.length !== 6) {
      context.openToastBox("error", "Please enter 6 digit OTP");
      return;
    }

    if(actionType !== "forgot-password"){

      postData("/api/user/verifyEmail",{
        email:localStorage.getItem("userEmail"),
        otp:otpValue
  
    }).then((res)=>{
      console.log(res)
      if(res?.error===false){
        context.openToastBox("success",res?.message)
        localStorage.removeItem("userEmail")
        history("/login")
      }else{
        context.openToastBox("error",res?.message)
      }
    }) 
  }else{

     postData("/api/user/verify-forgot-password-otp",{
  
        email:localStorage.getItem("userEmail"),
        otp:otpValue
  
    }).then((res)=>{
      console.log(res)
      if(res?.error===false){
        context.openToastBox("success",res?.message)
        history("/forgot-password")
      }else{
        context.openToastBox("error",res?.message)
      }
    })
    }

  }


  const handleChange = (value, index) => {
    if (isNaN(value)) return; //only number allow

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];

      if (newOtp[index] !== "") {
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        document.getElementById(`otp-${index - 1}`).focus();
      }
    }
  };


  return (

    <section className='section py-10'>
    <div className='container '>
        <div className='card shadow-lg  w-[400px] m-auto rounded-md bg-white px-12 p-5'>
            <h3 className='text-center text-[18px] text-black font-bold '>
                Verify OTP
            </h3>
        {/* Logo */}
        <ShieldCheck className="mx-auto mb-4 h-14 w-14 text-blue-600" />

        <h2 className="text-2xl font-bold flex items-center justify-center">OTP Verification</h2>
        <p className="mt-2 text-sm text-gray-500 flex items-center justify-center">
          Enter the 6-digit code sent to your Mail.
        </p>

        {/* OTP Boxes */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {otp.map((value, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              inputMode='numeric'
              maxLength="1"
              value={value}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e,index)}
              className="h-12 w-12 rounded-lg border text-center text-xl font-bold focus:border-blue-500 focus:outline-none"
            />
          ))}
        </div>

        <Button className="btn-org btn-lg !mt-5 w-full " onClick={verifyOtp}>
          Verify OTP
        </Button>
      
        </div>
    </div>
</section>
  
  
  
   );
}
  


export default Verify;
