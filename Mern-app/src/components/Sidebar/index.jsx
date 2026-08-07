import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import "../Sidebar/style.css"
import Rating from '@mui/material/Rating';

import RangeSliderPackage from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const RangeSlider = RangeSliderPackage.default || RangeSliderPackage;


const Sidebar = () => {
  return (
    <aside className ='sidebar py-5'>
        <div className='box'>
            <h3 className=' text-[16px] font-[600] mb-3 underline underline-offset-4'>Shop By Category</h3>
            <div className='scroll px-3 relative -left-[10px]'>
            <FormControlLabel control ={<Checkbox size='small'/>} label="Fashion" className='w-full'/>
            <FormControlLabel control ={<Checkbox size='small'/>} label="Electronics" className='w-full'/>
            <FormControlLabel control ={<Checkbox size='small'/>} label="Bags" className='w-full'/>
            <FormControlLabel control ={<Checkbox size='small'/>} label="Footwear" className='w-full'/>
            <FormControlLabel control ={<Checkbox size='small'/>} label="jewellary" className='w-full'/>
            <FormControlLabel control ={<Checkbox size='small'/>} label="Groceries" className='w-full'/>
            <FormControlLabel control ={<Checkbox size='small'/>} label="wellness" className='w-full'/>
            </div>
        </div>

        <div className='box mt-3'>
            <h3 className=' w-full mb-3 text-[16px] font-[600] flex items-center pr-5  underline underline-offset-4'>Availability</h3>
            <div className='scroll px-4 relative -left-[13px] '>
            <FormControlLabel control ={<Checkbox size='small'/>} label="Available (17)" className='w-full'/>
            <FormControlLabel control ={<Checkbox size='small'/>} label="Stock (10)" className='w-full'/>
            <FormControlLabel control ={<Checkbox size='small'/>} label="Not available (1)" className='w-full'/>
            </div>
        </div>
        <div className='box mt-3'>
            <h3 className=' w-full mb-3 text-[16px] font-[600] flex items-center pr-5  underline underline-offset-4'>Size</h3>
            <div className='scroll px-4 relative -left-[13px] '>
            <FormControlLabel control ={<Checkbox size='small'/>} label="Small (17)" className='w-full'/>
            <FormControlLabel control ={<Checkbox size='small'/>} label="Medium (10)" className='w-full'/>
            <FormControlLabel control ={<Checkbox size='small'/>} label="Large (1)" className='w-full'/>
            <FormControlLabel control ={<Checkbox size='small'/>} label="XL (1)" className='w-full'/>
            <FormControlLabel control ={<Checkbox size='small'/>} label="XXL (1)" className='w-full'/>
            </div>
        </div>

        <div className ='box mt-3'>
            <h3 className =' w-full mb-3 text-[16px] font-[600] flex items-center pr-5  underline underline-offset-4'>Filter By Price</h3>
            <RangeSlider/>
            <div className ='flex pt-2 pb-2 priceRange'>
              <span>
                From:-<strong className ='text-dark'>${100}</strong>
              </span>
              <span className='ml-auto'>
                From:-<strong className ='text-dark'>${5000}</strong>
              </span>
            </div>
        </div>

        <div className='box mt-3'>
            <h3 className=' w-full mb-3 text-[16px] font-[600] flex items-center pr-5  underline underline-offset-4'>Filter By Rating</h3>
            <div className='w-full'>
              <Rating name='size-small' defaultValue={2} size='small' readOnly/>
            </div>
            <div className='w-full'>
              <Rating name='size-small' defaultValue={1} size='small' readOnly/>
            </div>
            <div className='w-full'>
              <Rating name='size-small' defaultValue={5} size='small' readOnly/>
            </div>
            <div className='w-full'>
              <Rating name='size-small' defaultValue={4} size='small' readOnly/>
            </div>
            <div className='w-full'>
              <Rating name='size-small' defaultValue={3} size='small' readOnly/>
            </div>
            </div>
        
    </aside>
  )
}

export default Sidebar;
