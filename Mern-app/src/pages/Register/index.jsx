import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField'
import { IoMdEye } from 'react-icons/io'
import { IoMdEyeOff } from 'react-icons/io'
import Button from '@mui/material/Button'
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { postData } from '../../utils/api.js'
import { MyContext } from '../../App'
import CircularProgress from '@mui/material/CircularProgress'



const Register = () => {

    const[showPassword,setShowPassword]=useState(false)

    const[isLoading,setIsLoading]=useState(false)

    const[formFields,setFormFields] = useState({
        name:"",
        email:"",
        password:""
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

        if(formFields.name===""){
            context.openToastBox("error","Please Enter your Full Name")
            return false;
        }
        
        if(formFields.email===""){
            context.openToastBox("error"," Please Enter your Email")
            return false;
        }
        
        if(formFields.password===""){
            context.openToastBox("error","Please Enter your Password")
            return false;
        }
        
        postData("/api/user/register",formFields).then((res)=>{
            console.log(res)
            

            if(res?.error !== true){
                setIsLoading(false)
                context.openToastBox("success",res?.message)
                localStorage.setItem("userEmail",formFields.email)
                setFormFields({
                name:"",
                email:"",
                password:""
            })
           
            history("/verify")
            }else{
                context.openToastBox("error",res?.message)
                setIsLoading(false)
            }
            
        })

    }

  return (
    <section className='section py-10'>
        <div className='container'>
            <div className='card shadow-lg w-[400px] m-auto rounded-md bg-white px-12 p-5'>
                <h3 className='text-center text-[18px] text-black font-bold '>
                    Register with a new account
                </h3>

                <form className='w-full mt-5' onSubmit={handleSubmit}>
                <div className='form-group w-full mb-5 '>
                        <TextField
                        type='text'
                        id='name'
                        name='name'
                        label="Enter your Full Name.."
                        value={formFields.name}
                        variant='outlined'
                        className='w-full shadow-sm'
                        disabled={isLoading===true ? true : false}
                        onChange={onChangeInput}
                        />
                    </div>
                    <div className='form-group w-full mb-5 '>
                        <TextField
                        type='email'
                        id='email'
                        name='email'
                        label="Enter your Email Id.."
                        variant='outlined'
                        value={formFields.email}
                        className='w-full shadow-sm'
                        disabled={isLoading===true ? true : false}
                        onChange={onChangeInput}
                        />
                    </div>
                    <div className='form-group w-full mb-5 relative'>
                        <TextField
                        type={showPassword===false ? "password": "text"}
                        id='password'
                        name='password'
                        label="Enter your Password.."
                        variant='outlined'
                        className='w-full shadow-sm'
                        value={formFields.password}
                        disabled={isLoading===true ? true : false}
                        onChange={onChangeInput}
                        />
                        <Button className='!absolute top-[10px] right-[10px] z-50 !h-[35px] w-[35px] !min-w-[35px] !rounded-full  !text-black' onClick={()=>setShowPassword(!showPassword)}>

                            {showPassword===true ? <IoMdEye className='text-[40px] opacity-75'/>:<IoMdEyeOff className='text-[40px] opacity-75'/>}
                           
                        </Button>
                    </div>

                    

                   <div className='flex items-center w-full  mt-3 mb-3'>
                   <Button type="submit" disabled={!valideValue} className='btn-org btn-lg w-full !shadow-md flex gap-4'>

                   {isLoading===true ?  <CircularProgress color='inherit'/>: "Register" }
                    
                   </Button>
                   </div>

                   <p className='text-[14px] text-center mb-2 gap-2'>Already have an account ? <Link className='link text-[16px] font-[500]' to='/login'>Login</Link></p>

                   <p className='text-center mb-1'>Or continue with social account</p>

                   <Button className='!flex !gap-3 !bg-[#f1f1f1] !w-full btn-lg !text-black !shadow-lg'>
                    <FcGoogle className='text-[20px]'/>Login with Google</Button>

                </form>
            </div>
        </div>
    </section>
  )
}

export default Register
