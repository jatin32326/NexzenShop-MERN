import React from 'react'
import { IoMdTime } from 'react-icons/io';
import { Link } from 'react-router-dom';

const BlogItem = () => {
  return (
   <div className='blogItem group'>
     <div className='imageWrapper w-full overflow-hidden rounded-md cursor-pointer relative'>
        <img src="https://classyshop-server.advanceuitechniques.com/download/1783056671047_blog-2-3.jpg" className='w-full transition-all group-hover:scale-105'alt='blog image'/> 

        <span className='flex items-center justify-center text-white absolute
         bottom-[15px] right-[15px] z-50 rounded-md bg-red-500 p-1 text-[11px] font-[600] group-1'>
            <IoMdTime className='text-[16px]'/> 5 APRIL, 2026
            </span>
    </div>

    <div className='info py-4'>
        <h2 className='text-[16px] font-[600] text-black'>
           <Link to = '/' className='link'>Nullam ullamcorper ornare molestie</Link>
        </h2>
        <p className='text-[13px] font-[400] text-[rgba(0,0,0,0.8)] mb-4'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, dolores illo vel sint consequuntur consectetur numquam. A, cum...
        </p>

        <Link className='link font-[500] text-[15px] underline underline-offset-4 text-red-600'>Read More</Link>
        
    </div>
   </div>
  )
}

export default BlogItem;
