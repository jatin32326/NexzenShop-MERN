import Button from '@mui/material/Button'
import React, { useContext } from 'react'
import { FaCloudUploadAlt, FaUserAlt } from 'react-icons/fa'
import { BsFillBagCheckFill } from 'react-icons/bs';
import { IoIosLogOut, IoMdHeart } from "react-icons/io";
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import {LuMapPinCheck} from "react-icons/lu"
import { MyContext } from '../../App';



const MyAccount = () => {
    const context = useContext(MyContext)
  return (
    <section className='py-10 w-full'>
        <div className='container flex gap-5'>
            <div className='col1 w-[20%]'>
                <div className='cart bg-white shadow-md rounded-md'>
                    <div className='w-full p-5 flex items-center justify-center flex-col'>
                        <div className='w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative group '>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeVc7EMgMvhJAFe5b2cLjWbqEFZqo2XUZGQY2J9GHa5t0MR98CizKiUGQ&s" className='w-full h-full object-cover'/> 
                            <div className='overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100'>
                                <FaCloudUploadAlt className='text-[#fff] text-[25px]'/>
                                <input type ="file" className='absolute top-0 left-0 w-full h-full opacity-0'/>
                            </div>
                        </div>

                        <h3>{context?.userData?.name}</h3>
                        <h6 className='text-[13px] font-[500]'>{context?.userData?.email}</h6>

                    </div>
                    

                    <ul className='list-none pb-5'>
                        <li className='w-full'>
                            <Button className='!rounded-none !w-full !text-left !justify-start !px-5 flex items-center gap-2 !text-[rgba(0,0,0,0.8)]'><FaUserAlt className='text-[17px]'/>User Profile</Button>
                        </li>
                        <li className='w-full'>
                            <Link to = "/address">
                            <Button className='!rounded-none !w-full !text-left !justify-start !px-5 flex items-center gap-2 !text-[rgba(0,0,0,0.8)]'><LuMapPinCheck className='text-[19px]'/>Address</Button>
                            </Link>
                        </li>
                        <li className='w-full'>
                            <Link to = "/my-list">
                            <Button className='!rounded-none !w-full !text-left !justify-start !px-5 flex items-center gap-2 !text-[rgba(0,0,0,0.8)]'><BsFillBagCheckFill className='text-[17px]'/>My List</Button>
                            </Link>
                        </li>
                        <li className='w-full'>
                            <Link to = "/my-orders">
                            <Button className='!rounded-none !w-full !text-left !justify-start !px-5 flex items-center gap-2 !text-[rgba(0,0,0,0.8)]'><IoMdHeart className='text-[20px]'/>My Orders</Button>
                            </Link>
                        </li>
                        <li className='w-full'>
                            <Button className='!rounded-none !w-full !text-left !justify-start !px-5 flex items-center gap-2 !text-[rgba(0,0,0,0.8)]'><IoIosLogOut className='text-[20px] text-black font-[800]'/>Logout</Button>
                        </li>
                    </ul>


                </div>
            </div>

            <div className = "col2 w-[80%]">
                <div className='card p-5 shadow-sm rounded-md bg-white'>
                    <h2 className='pb-3'>My Profile</h2>
                    <hr/>

                    <form className='mt-5'>
                        <div className='flex items-center mt-4 gap-5'>
                        <div className='w-[50%]'>
                        <TextField label="Full Name" variant="outlined" size='small' className='w-full'/>
                        </div>

                        
                        <div className='w-[50%]'>
                        <TextField label="Email" variant="outlined" size='small' className='w-full'/>
                        </div>
                        </div>
                        
                       
                        <div className='flex items-center mt-4 gap-5'>
                        <div className='w-[50%]'>
                        <TextField label="Phone Number" variant="outlined" size='small' className='w-full'/>
                        </div>
                        </div>

                        <br/>

                        <div className='flex items-center gap-4 '>
                            <Button className='btn-lg btn-org w-[100px]'>Save</Button>
                            <Button className='btn-lg !bg-slate-300 !text-black hover:!bg-slate-700 w-[100px]'>Cancel</Button>

                        </div>
                    </form>
                </div>
            </div>
        </div>

    </section>
  )
}

export default MyAccount
