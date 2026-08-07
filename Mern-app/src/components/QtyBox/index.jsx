import Button from '@mui/material/Button'
import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

const QtyBox = () => {

    const[qtyValue,setQtyValue] = useState(1)

    const plusQty =()=>{
        setQtyValue(qtyValue + 1)
    }

    const minusQty = ()=>{
        if(qtyValue===1){
            setQtyValue(1)
        }else{
            setQtyValue(qtyValue - 1)
        } 
    }
  return (
    <div className='qtyBox flex items-center relative'>
      <input type='number' className='w-full text-[15px] p-2 pl-5 h-[40px] focus:outline-none border border-[#000] rounded-md' Value={qtyValue}/>
      
      <div className='flex items-center flex-col justify-between h-[40px] absolute top-0 right-0 z-50'>

      <Button className='!min-w-[25px] !w-[25px] !h-[20px] !text-[#000] !rounded-none' onClick={plusQty}>
        <FaAngleUp/>
        </Button>
      <Button  className='!min-w-[25px] !w-[25px] !h-[20px] !text-[#000] !rounded-none' onClick={minusQty}>
        <FaAngleDown/>
        </Button>
      </div>
    </div>
  )
}

export default QtyBox
