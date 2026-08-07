import Button from '@mui/material/Button'
import React, { useState } from 'react'
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import { LiaShippingFastSolid } from "react-icons/lia";
import Category from './Category';


const Navigation = () => {
  const[isOpenPannel,setIsOpenPannel]=useState(false);

  const OpenCategoryPanel=()=>{
    setIsOpenPannel(true);
  }


  return (
    <>
  <nav className='py-2'>
    <div className='container flex items-center justify-end gap-10'>
      <div className='col_1 w-[20%]'>
        <Button className='!text-black gap-2 w-full'onClick={OpenCategoryPanel}><RiMenu2Fill className='text-[18px]'/>Shop By Categories
        <LiaAngleDownSolid className='text-[13px] ml-auto font-bold' />
        </Button>
      </div>
      <div className='col_2 w-[60%]'>
        <ul className='flex items-center gap-8'>
          <li className='list-none'>
            <Link to="/" className='link transition text-[14px] font-[500]'>Home</Link>
          </li>
          <li className='list-none'>
            <Link to="/" className='link transition text-[14px] font-[500]'>Fashion</Link>
          </li>
          <li className='list-none'>
            <Link to="/" className='link transition text-[14px] font-[500]'>Electronics</Link>
          </li>
          <li className='list-none'>
            <Link to="/" className='link transition text-[14px] font-[500]'>Footwear</Link>
          </li>
          <li className='list-none'>
            <Link to="/" className='link transition text-[14px] font-[500]'>Groceries</Link>
          </li>
          <li className='list-none'>
            <Link to="/" className='link transition text-[14px] font-[500]'>Beauty</Link>
          </li>
          <li className='list-none'>
            <Link to="/" className='link transition text-[14px] font-[500]'>Jewellery</Link>
          </li>
        </ul>

      </div>
      <div className='col_3 w-[20%]'>
        <p className='text-[15px] font-[500] flex items-center gap-5 mb-0 mt-0'>
        <LiaShippingFastSolid  className='text-[30px] font-bold'/>
          Free International Delivery
        </p>
      </div>
   </div>
  </nav>
    {/* Catogory drawer */}
  <Category isOpenPannel={isOpenPannel} setIsOpenPannel={setIsOpenPannel}/>
    
    </>
  );
}

export default Navigation
