import React from 'react'
import "../ProductItem/style.css"
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating'
import Button from '@mui/material/Button'
import {FaRegHeart} from 'react-icons/fa'
import {MdOutlineShoppingCart} from "react-icons/md"

const ProductItem = () => {
  return (
    <div className='productItem rounded-sm  overflow-hidden border-2 shadow-md border-[rgba(0,0,0,0.1)]'>
    {/* product items */}
      <div className='imgWrapper w-[100%] h-[200px] overflow-hidden  relative'>
        <img src="/src/assets/Product1.jpg" className='w-full'/>
        <span className='discount flex items-center absolute top-[10px] left-[10px] z-50 bg-red-100 shadow-sm shadow-black text-black rounded-lg p-1 text-[12px] font-[600]'>
          10% Off
        </span> 

        <div className='actions absolute top-[15px] right-[5px] z-50 flex items-center gap-4 flex-col w-[50px]'>
          <Button className="!w-[35px] !h-[35px] !min-w-[45px] !rounded-full  !text-black !bg-white  hover:!bg-red-500  hover:text-white group">
            <FaRegHeart className='text-[18px] text-black group-hover:text-white'/>
            </Button>
        </div>
      </div>

      <div className='info p-3 py-3'>
        <h6 className='text-[14px]'><Link to="/" className='link transition-all'>Soylent Green</Link></h6>
        <h3 className='text-[16px] title mt-1 font-[500] mb-1 text-[#000]'>
          <Link to="/" className='link transition-all'>Siril Georgette Pink color Saree with Blouse Piece</Link>
        </h3>

        <Rating name='size-small' defaultValue={4} size='small' readOnly/>

        <div className='flex items-center gap-4'>
            <span className='oldPrice line-through text-gray-500 text-[15px] font-[500]'>$58.00</span>
            <span className='Price text-black text-[15px] font-bold'>$50.00</span>
        </div>

        <div className='mt-3'>
          <Button className='btn-org flex gap-2 '><MdOutlineShoppingCart/>Add To Cart</Button>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
