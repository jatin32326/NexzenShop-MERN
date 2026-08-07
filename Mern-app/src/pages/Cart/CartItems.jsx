import React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react'
import { GoTriangleDown } from "react-icons/go"
import { IoCloseSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating'


const CartItems = (props) => {

    const [sizeAnchorEl, setSizeAnchorEl] = useState(null)
    const [selectedSize,setSelectedSize] = useState(props.size)
    const openSize = Boolean(sizeAnchorEl);

    const [qtyAnchorEl, setQtyAnchorEl] = useState(null)
    const [selectedQty,setSelectedQty] = useState(props.qty)
    const openQty = Boolean(qtyAnchorEl);

    const handleClick = (event) => {
        setSizeAnchorEl(event.currentTarget);
    };
    const handleClickQty = (event) => {
        setQtyAnchorEl(event.currentTarget);
    };
    const handleClose = (value) => {
        setSizeAnchorEl(null);
        if(value!==null){
            setSelectedSize(value)
        }
    };
    const handleCloseQty = (value) => {
        setQtyAnchorEl(null);
        if(value!==null){
            setSelectedQty(value)
        }
    };

    return (
        <div className='cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.2)]'>
            <div className='img w-[15%] rounded-md overflow-hidden'>
                <Link to="/productDetails/as455" className='group'>
                    <img src='https://rukminim1.flixcart.com/image/1364/1364/xif0q/shirt/l/z/1/11-12-years-multicolur-klok-wear-original-imahhn5ag9vkh52d.jpeg?q=90' className='w-full group-hover:scale-105' />
                </Link>
            </div>

            <div className='info w-[85%] relative'>
                <IoCloseSharp className='cursor-pointer absolute top-[0px] right-[0px] text-[22px] link transition-all' />
                <span className='text-[13px]'>
                    METRONAUT
                </span>
                <h3 className='text-[15px]'>
                    <Link className='link'>
                        METRONAUT Men Regular Fit Solid Spread Collar Casual Shirt
                    </Link>
                </h3>

                <Rating name='small-size' defaultValue={4} readOnly />


                <div className='flex items-center gap-4 mt-2'>
                    <div className='relative'>
                        <span className='flex items-center justify-center bg-[#f1f1f1] text-[13px] font-[600] p-1 rounded-md py-1 px-2 cursor-pointer' onClick={handleClick}>Size: {selectedSize} <GoTriangleDown /></span>

                        <Menu
                            id="size-menu"
                            anchorEl={sizeAnchorEl}
                            open={openSize}
                            onClose={()=>handleClose(null)}
                            MenuListProps={{
                                "aria-labelledby": "basic-button"

                            }}

                        >
                            <MenuItem onClick={()=>handleClose("S")}>S</MenuItem>
                            <MenuItem onClick={()=>handleClose("M")}>M</MenuItem>
                            <MenuItem onClick={()=>handleClose("L")}>L</MenuItem>
                            <MenuItem onClick={()=>handleClose("XL")}>XL</MenuItem>
                        </Menu>
                    </div>

                    <div className='relative'>
                        <span className='flex items-center justify-center bg-[#f1f1f1] text-[13px] font-[600] p-1 rounded-md py-1 px-2 cursor-pointer'onClick={ handleClickQty}>Qty: {selectedQty} <GoTriangleDown /></span>

                        <Menu
                            id="size-menu"
                            anchorEl={qtyAnchorEl}
                            open={openQty}
                            onClose={()=> handleCloseQty(null)}
                            MenuListProps={{
                                "aria-labelledby": "basic-button"

                            }}

                        >
                            <MenuItem onClick={()=>handleCloseQty(1)}>1</MenuItem>
                            <MenuItem onClick={()=>handleCloseQty(2)}>2</MenuItem>
                            <MenuItem onClick={()=>handleCloseQty(3)}>3</MenuItem>
                            <MenuItem onClick={()=>handleCloseQty(4)}>4</MenuItem>
                            <MenuItem onClick={()=>handleCloseQty(5)}>5</MenuItem>
                            <MenuItem onClick={()=>handleCloseQty(6)}>6</MenuItem>
                        </Menu>
                    </div>
                </div>


                <div className='flex items-center gap-4 mt-4'>
                    <span className='oldPrice line-through text-gray-500 text-[17px] font-[500]'>$58.00</span>
                    <span className='Price text-black text-[17px] font-bold'>$50.00</span>

                    <span className='discount flex items-center text-red-600 p-1 text-[13px] font-[600] '>
                        10% Off
                    </span>
                </div>
            </div>
        </div>

    )
}

export default CartItems
