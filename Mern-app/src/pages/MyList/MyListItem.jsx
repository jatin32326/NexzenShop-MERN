import React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


import { IoCloseSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating'
import Button from  '@mui/material/Button';


const MyListItem = () => {

    return (
        <div className='cartItem p-3 flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.2)]'>
            <div className='img w-[10%] rounded-md overflow-hidden'>
                <Link to="/productDetails/as455" className='group'>
                    <img src='https://rukminim1.flixcart.com/image/1364/1364/xif0q/shirt/l/z/1/11-12-years-multicolur-klok-wear-original-imahhn5ag9vkh52d.jpeg?q=90' className='w-full group-hover:scale-105' />
                </Link>
            </div>

            <div className='info w-[85%] relative'>
                <IoCloseSharp className='cursor-pointer absolute top-[0px] left-[100%] text-[23px] link transition-all' />
                <span className='text-[13px]'>
                    METRONAUT
                </span>
                <h3 className='text-[15px]'>
                    <Link className='link'>
                        METRONAUT Men Regular Fit Solid Spread Collar Casual Shirt
                    </Link>
                </h3>

                <Rating name='small-size' defaultValue={4} readOnly />

                <div className='flex items-center gap-4 mt-1'>
                    <span className='oldPrice line-through text-gray-500 text-[17px] font-[500]'>$58.00</span>
                    <span className='Price text-black text-[17px] font-bold'>$50.00</span>

                    <span className='discount flex items-center text-red-600 p-1 text-[13px] font-[600] '>
                        10% Off
                    </span>
                </div>

                <Button className='btn-org !text-[12px] !mb-1'>Add to Cart</Button>
            </div>
        </div>

    )
}

export default MyListItem
