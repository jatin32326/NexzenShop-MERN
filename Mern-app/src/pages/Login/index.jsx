import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField'
import { IoMdEye } from 'react-icons/io'
import { IoMdEyeOff } from 'react-icons/io'
import Button from '@mui/material/Button'
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { MyContext } from '../../App'
import CircularProgress from '@mui/material/CircularProgress'
import { postData } from '../../utils/api'




const Login = () => {

    const[isLoading,setIsLoading]=useState(false)
    const[showPassword,setShowPassword] = useState(false)

    const[formFields,setFormFields] = useState({
        email:"",
        password:""
    });

    const context = useContext(MyContext)
    const history = useNavigate()
   
    const ForgotPassword = ()=>{

        if(formFields.email===""){
            context.openToastBox("error","please enter email id");
            return false;
        }else{
            context.openToastBox(`success,OTP send to ${formFields.email}`)
            localStorage.setItem("userEmail",formFields.email)
            localStorage.setItem("actionType",'forgot-password');
           
           
                postData("/api/user/forgot-password",{
                  email:formFields.email,
                  
                 
              }).then((res)=>{
                console.log(res)
                if(res?.error===false){
                  context.openToastBox("success",res?.message)
                  history("/verify")
                }else{
                  context.openToastBox("error",res?.message)
                }
              })

        }
    }

    const onChangeInput = (e)=>{
        const{name,value}=e.target
        setFormFields(()=>{
            return{
                ...formFields,
                [name]:value
            }      
        })
    }

    const valideValue = Object.values(formFields).every(el=>el)

    const handleSubmit = (e)=>{

        e.preventDefault();

        setIsLoading(true)
        
        if(formFields.email===""){
            context.openToastBox("error"," Please Enter your Email")
            return false;
        }
        
        if(formFields.password===""){
            context.openToastBox("error","Please Enter your Password")
            return false;
        }
        
        postData("/api/user/login",formFields,{withCredentials:true}).then((res)=>{
            console.log(res)
            

            if(res?.error !== true){
                setIsLoading(false)
                context.openToastBox("success",res?.message)
                
                setFormFields({
                email:"",
                password:""
            })

            localStorage.setItem("accessToken",res?.data?.accessToken);
            localStorage.setItem("refreshToken",res?.data?.refreshToken);

            context.setIsLogin(true)
           
            history("/")
            }else{
                context.openToastBox("error",res?.message)
                setIsLoading(false)
            }
            
        })

    }


  return (
    <section className='section py-10'>
        <div className='container '>
            <div className='card shadow-lg  w-[400px] m-auto rounded-md bg-white px-12 p-5'>
                <h3 className='text-center text-[18px] text-black font-bold '>
                    Login to your account
                </h3>

                <form className='w-full mt-5' onSubmit={handleSubmit}>
                    <div className='form-group w-full mb-5 '>
                        <TextField
                        type='email'
                        id='email'
                        label="Enter your Email Id "
                        variant='outlined'
                        disabled={isLoading===true ? true : false}
                        onChange={onChangeInput}
                        value={formFields.email}
                        className='w-full shadow-sm'
                        name='email'
                        />
                    </div>
                    <div className='form-group w-full mb-5 relative'>
                        <TextField
                        type={showPassword===false ? "password": "text"}
                        id='password'
                        label="Enter your Password "
                        variant='outlined'
                        disabled={isLoading===true ? true : false}
                        onChange={onChangeInput}
                        value={formFields.password}
                        className='w-full shadow-sm'
                        name='password'
                        />
                        <Button className='!absolute top-[10px] right-[10px] z-50 !h-[35px] w-[35px] !min-w-[35px] !rounded-full  !text-black' onClick={()=>setShowPassword(!showPassword)}>

                            {showPassword===true ? <IoMdEye className='text-[40px] opacity-75'/>:<IoMdEyeOff className='text-[40px] opacity-75'/>}
                           
                        </Button>
                    </div>

                    <a className='link cursor-pointer text-[14px] font-[600]' onClick={ForgotPassword}>Forgot Password</a>

                    <div className='flex items-center w-full  mt-3 mb-3'>
                   <Button type="submit" disabled={!valideValue} className='btn-org btn-lg w-full !shadow-md flex gap-4'>

                   {isLoading===true ?  <CircularProgress color='inherit'/>: "Login" }
                    
                   </Button>
                   </div>
                   <p className='text-[14px] text-center mb-2 gap-2'>Not Registered ? <Link className='link text-[16px] font-[500]' to='/register'>Sign Up</Link></p>

                   <p className='text-center mb-1'>Or continue with social account</p>

                   <Button className='!flex !gap-3 !bg-[#f1f1f1] !w-full btn-lg !text-black !shadow-lg'>
                    <FcGoogle className='text-[20px]'/>Login with Google</Button>

                </form>
            </div>
        </div>
    </section>
  )
}

export default Login
