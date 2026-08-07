import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import React from 'react'
import { BsFillBagCheckFill } from 'react-icons/bs'

const CheckOut = () => {
  return (
    <section className='py-10'>
        <div className='container flex gap-5 '>
            <div className='leftCol w-[70%]'>
                <div className='card bg-white shadow-md rounded-md p-5 w-full'>
                    <h1 className='text-[25px] font-[600]'>Billing Details</h1>

                    <form className='w-full mt-5'>
                    <div className='flex items-center gap-5 pb-5' >
                            <div className='col w-[50%]'>
                                <TextField className='w-full'label="Full Name*" variant='outlined'
                                size='small'/>
                            </div>
                            <div className='col w-[50%]'>
                                <TextField className='w-full'type="email" label="Email*" variant='outlined'
                                size='small'/>
                            </div>
                            </div>

                            <h4 className='text-[14px] font-[500] mb-3'>Street Address *</h4>
                            
                            <div className='flex items-center gap-5 pb-5' >
                            <div className='col w-[100%]'>
                                <TextField className='w-full'label="House number and Street name" variant='outlined'
                                size='small'/>
                            </div>
                            <div className='col w-[100%]'>
                                <TextField className='w-full'label="Apartment,unit,etc. (optional)" variant='outlined'
                                size='small'/>
                            </div>
                            </div>
                            

                            <h4 className='text-[14px] font-[500] mb-3'>Town/City*</h4>
                            
                            <div className='flex items-center gap-5 pb-5' >
                            <div className='col w-[100%]'>
                                <TextField className='w-full'label="city" variant='outlined'
                                size='small'/>
                            </div>
                            </div>
                            
                            <h4 className='text-[14px] font-[500] mb-3'>State/Country*</h4>
                            
                            <div className='flex items-center gap-5 pb-5' >
                            <div className='col w-[100%]'>
                                <TextField className='w-full'label="State" variant='outlined'
                                size='small'/>
                            </div>
                            </div>
                            
                            <h4 className='text-[14px] font-[500] mb-3'>Postcode/Zip*</h4>
                            
                            <div className='flex items-center gap-5 pb-5' >
                            <div className='col w-[100%]'>
                                <TextField className='w-full'label="Pin Code" variant='outlined'
                                size='small'/>
                            </div>
        
                           
                            </div>
                            <div className='flex items-center gap-5 pb-5' >
                            <div className='col w-[50%]'>
                                <TextField className='w-full'label="Phone Number" variant='outlined'
                                size='small'/>
                            </div>
                            <div className='col w-[50%]'>
                                <TextField className='w-full'type="email" label="Email Address" variant='outlined'
                                size='small'/>
                            </div>

                            </div>


                        
                    </form>
                </div>
            </div>

            <div className='rightPart w-[30%]'>
                    <div className='shadow-md rounded-md bg-white p-5'>
                        <h3 className='pb-3 font-bold'>Your Order</h3>
                        <hr/>

                        <p className='flex items-center justify-between py-3 border-b'>
                            <span className='text-[14px] font-[500]'>Product</span>
                            <span className='text-pink-900 font-[500]'>Subtotal</span>
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

export default CheckOut
