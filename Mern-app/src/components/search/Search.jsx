import React from 'react'
import '../search/search.css'
import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";



const Search = () => {
  return (
    <div className='searchBox w-[100%] h-[80%] bg-[#e5e5e5] rounded-[5px] relative p-2 justify-stretch left-12'>
      <input type="text" placeholder='Search for products...'className='w-full h-[35px] focus:outline-none bg-inherit
      p2 text-[15px]'/>
       <Button className='!absolute top-[8px] right-[8PX] z-50!w-[37px] min-w-[37px] h-[37px] !rounded-full !text-black'>
        <IoSearch className='text-black text-[22px]' />
        </Button>
       
    </div>
  )
}

export default Search
