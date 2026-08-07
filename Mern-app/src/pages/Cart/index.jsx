import React from 'react'
import Button from '@mui/material/Button'
import { BsFillBagCheckFill } from 'react-icons/bs'
import CartItems from './CartItems'


const CartPage = () => {

    return (
        <section className='section py-10 pb-10'>
            <div className='container w-[80%] max-w-[80%] flex gap-5'>
                <div className='leftPart w-[70%]'>
                    <div className='shadow-md rounded-md bg-white'>
                        <div className='py-2 px-3 border-b border-[rgba(0,0,0,0.2)] '>
                            <h2>Your Cart</h2>
                            <p className='mt-1'>
                                There are<span className='font-bold text-red-700 px-1'>2</span>
                                Products in your Cart
                            </p>
                        </div>
                        <CartItems size={"S"} qty={1}/>
                        <CartItems size={"S"} qty={1}/>
                        <CartItems size={"S"} qty={1}/>
                        <CartItems size={"S"} qty={1}/>
                        <CartItems size={"S"} qty={1}/>
        
                    </div>
                </div>

                <div className='rightPart w-[30%]'>
                    <div className='shadow-md rounded-md bg-white p-5'>
                        <h3 className='pb-3'>Cart Totals</h3>
                        <hr />

                        <p className='flex items-center justify-between'>
                            <span className='text-[14px] font-[500]'>Subtotal</span>
                            <span className='text-pink-900 font-[500]'>$800.00</span>
                        </p>

                        <p className='flex items-center justify-between'>
                            <span className='text-[14px] font-[500]'>Shipping</span>
                            <span className='text-green-600 font-[500]'>Free</span>
                        </p>

                        <p className='flex items-center justify-between'>
                            <span className='text-[14px] font-[500]'>Estimate for</span>
                            <span className='text-black font-[500]'>USA</span>
                        </p>

                        <p className='flex items-center justify-between'>
                            <span className='text-[14px] font-[500]'>Total</span>
                            <span className='text-black font-[500]'>$800.00</span>
                        </p>

                        <br />

                        <Button className='btn-org btn-lg w-full flex gap-2'><BsFillBagCheckFill className='text=[30px]' />Checkout</Button>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartPage
