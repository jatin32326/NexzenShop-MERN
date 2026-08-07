import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField'
import { IoMdEye } from 'react-icons/io'
import { IoMdEyeOff } from 'react-icons/io'
import Button from '@mui/material/Button'
import { Link, useNavigate } from 'react-router-dom'
import { MyContext } from '../../App'
import CircularProgress from '@mui/material/CircularProgress'
import { postData } from '../../utils/api'




const ForgotPassword = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [showPassword2, setShowPassword2] = useState(false)
    const[isLoading,setIsLoading]=useState(false)

    const[formFields,setFormFields] = useState({
        email:localStorage.getItem("userEmail"),
        newPassword:"",
        confirmPassword:""
    });

    const context = useContext(MyContext)
    const history = useNavigate()

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
        
        if(formFields.newPassword===""){
            context.openToastBox("error","Enter your new password")
            setIsLoading(false)
            return false;
        }
        
        if(formFields.confirmPassword !== formFields.newPassword){
            context.openToastBox("error","Password or Confirm Password Not Match")
            setIsLoading(false)
            return false;
        }
        
       postData(`/api/user/reset-password`,formFields).then((res)=>{
        if(res?.error === false){
            localStorage.removeItem("userEmail")
            localStorage.removeItem("actionType")
            context.openToastBox("success",res?.message)
            setIsLoading(false);
            history("/login")
        }else{
            context.openToastBox("error",res?.message)
        }
        
       })
    }



    return (
        <section className='section py-10'>
            <div className='container '>
                <div className='card shadow-lg  w-[400px] m-auto rounded-md bg-white px-12 p-5'>
                    <h3 className='text-center text-[18px] text-black font-bold '>
                        Forgot Password
                    </h3>

                    <form className='w-full mt-5' onSubmit={handleSubmit}>
                        <div className='form-group w-full mb-5 relative'>
                            <TextField
                                type={showPassword === false ? "password" : "text"}
                                id='New_password'
                                label="Enter New Password"
                                variant='outlined'
                                disabled={isLoading===true ? true : false}
                                value={formFields.newPassword}
                                className='w-full shadow-sm'
                                onChange={onChangeInput}
                                name='newPassword'
                            />
                            <Button className='!absolute top-[10px] right-[10px] z-50 !h-[35px] w-[35px] !min-w-[35px] !rounded-full  !text-black' onClick={() => setShowPassword(!showPassword)}>

                                {showPassword === true ? <IoMdEye className='text-[40px] opacity-75' /> : <IoMdEyeOff className='text-[40px] opacity-75' />}

                            </Button>
                        </div>
                        <div className='form-group w-full mb-5 relative'>
                            <TextField
                                type={showPassword2 === false ? "password" : "text"}
                                id='confirm_password'
                                label="Enter Confirm Password "
                                variant='outlined'
                                className='w-full shadow-sm'
                                disabled={isLoading===true ? true : false}
                                value={formFields.confirmPassword}
                                name='confirmPassword'
                                onChange={onChangeInput}
                            />
                            <Button className='!absolute top-[10px] right-[10px] z-50 !h-[35px] w-[35px] !min-w-[35px] !rounded-full  !text-black' onClick={() => setShowPassword2(!showPassword2)}>

                                {showPassword2 === true ? <IoMdEye className='text-[40px] opacity-75' /> : <IoMdEyeOff className='text-[40px] opacity-75' />}

                            </Button>
                        </div>


                        <div className='flex items-center w-full  mt-3 mb-3'>
                   <Button type="submit" disabled={!valideValue} className='btn-org btn-lg w-full !shadow-md flex gap-4'>

                   {isLoading===true ?  <CircularProgress color='inherit'/>: "Login" }
                    
                   </Button>
                   </div>

                    </form>
                </div>
            </div>
        </section>
    )
}

export default ForgotPassword
