import React, { useContext } from 'react'
import { LiaShippingFastSolid } from 'react-icons/lia';
import { PiKeyReturnLight } from 'react-icons/pi'
import { BsWallet2 } from 'react-icons/bs'
import { LiaGiftSolid } from 'react-icons/lia'
import { BiSupport } from "react-icons/bi"
import { IoChatboxOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { AiOutlineYoutube } from 'react-icons/ai'

import Drawer from '@mui/material/Drawer';
import { IoCloseSharp } from "react-icons/io5"
import { MdOutlineDeleteOutline } from "react-icons/md"
import { MyContext } from '../../App';


const Footer = () => {

    const context = useContext(MyContext)
    return (
        <>
            <footer className='py-6'>
                <div className='container'>
                    <div className='flex items-center justify-center gap-2 py-8 pb-8'>

                        <div className='col flex items-center justify-center w-[15%] flex-col group'>
                            <LiaShippingFastSolid className='text-[40px] transition-all duration-300 group-hover:text-red-500 group-hover:-translate-y-1 ' />
                            <h3 className='text-[18px] font-bold mt-3'>Free Shipping</h3>
                            <p className='text-[14px] font-[500]'>For all orders over $100</p>
                        </div>
                        <div className='col flex items-center justify-center  w-[15%] flex-col group'>
                            <PiKeyReturnLight className='text-[40px] transition-all duration-300 group-hover:text-red-500 group-hover:-translate-y-1 ' />
                            <h3 className='text-[18px] font-bold mt-3'>30 Days Returns</h3>
                            <p className='text-[14px] font-[500]'>For an Exchange Product</p>
                        </div>
                        <div className='col flex items-center justify-center  w-[15%] flex-col group'>
                            <BsWallet2 className='text-[40px] transition-all duration-300 group-hover:text-red-500 group-hover:-translate-y-1 ' />
                            <h3 className='text-[18px] font-bold mt-3'>Secure Payment</h3>
                            <p className='text-[14px] font-[500]'>Payment Card Accepted</p>
                        </div>
                        <div className='col flex items-center justify-center  w-[15%] flex-col group'>
                            <LiaGiftSolid className='text-[40px] transition-all duration-300 group-hover:text-red-500 group-hover:-translate-y-1 ' />
                            <h3 className='text-[18px] font-bold mt-3'>Special Gifts</h3>
                            <p className='text-[14px] font-[500]'>Your First order</p>
                        </div>
                        <div className='col flex items-center justify-center  w-[15%] flex-col group'>
                            <BiSupport className='text-[40px] transition-all duration-300 group-hover:text-red-500 group-hover:-translate-y-1 ' />
                            <h3 className='text-[18px] font-bold mt-3'>Support 24/7</h3>
                            <p className='text-[14px] font-[500]'> Contact Us Anytime</p>
                        </div>
                    </div>

                    <br />

                    <hr className='border-t border-[rgba(0,0,0,0.2)] ' />

                    <div className='footer flex items-center py-8'>
                        <div className='part1 w-[25%] border-r border-[rgba(0,0,0,0.2)]'>
                            <h2 className='text-[20px] font-[600] mb-4'>Contact us</h2>
                            <p className='text-[14px] font-[400] pb-4'>NexZenShop - Mega super store<br />
                                507-Union Trade Center
                                France
                            </p>
                            <Link className='link' to='mailto:someone@example.com '>Sales@NextZenShop.com</Link>
                            <span className='text-[20px] font-[500] block w-full mt-3 mb-5'>(+91) 9908-080-090</span>

                            <div className='flex items-center gap-2'>
                                <IoChatboxOutline className='text-[40px] font-[600] text-red-500' />
                                <span className='text-[13px] font-[600]'>Online Chat<br />Get Expert Help</span>
                            </div>
                        </div>

                        <div className='part2 w-[40%] pl-8 flex'>
                            <div className='part2_col1 w-[50%]'>
                                <h2 className='text-[20px] font-[600] mb-4'>Products</h2>

                                <ul className='list'>
                                    <li className='list-none w-full text-[14px] mb-2'>
                                        <Link to="/" className='link'>Prices Drop</Link>
                                    </li>
                                    <li className='list-none w-full text-[14px] mb-2'>
                                        <Link to="/" className='link'>New Products</Link>
                                    </li>
                                    <li className='list-none w-full text-[14px] mb-2'>
                                        <Link to="/" className='link'>Best Sales</Link>
                                    </li>
                                    <li className='list-none w-full text-[14px] mb-2'>
                                        <Link to="/" className='link'>Contact us</Link>
                                    </li>
                                    <li className='list-none w-full text-[14px] mb-2'>
                                        <Link to="/" className='link'>Sitemap</Link>
                                    </li>
                                    <li className='list-none w-full text-[14px] mb-2'>
                                        <Link to="/" className='link'>Stores</Link>
                                    </li>
                                </ul>

                            </div>

                            <div className='part2_col2 w-[50%]'>
                                <h2 className='text-[20px] font-[600] mb-4'>Our Company</h2>

                                <ul className='list'>
                                    <li className='list-none w-full text-[14px] mb-2'>
                                        <Link to="/" className='link'>Delivery</Link>
                                    </li>
                                    <li className='list-none w-full text-[14px] mb-2'>
                                        <Link to="/" className='link'>Legal Notice</Link>
                                    </li>
                                    <li className='list-none w-full text-[14px] mb-2'>
                                        <Link to="/" className='link'>Terms And Conditions</Link>
                                    </li>
                                    <li className='list-none w-full text-[14px] mb-2'>
                                        <Link to="/" className='link'>About us</Link>
                                    </li>
                                    <li className='list-none w-full text-[14px] mb-2'>
                                        <Link to="/" className='link'>Secure Payment</Link>
                                    </li>
                                    <li className='list-none w-full text-[14px] mb-2'>
                                        <Link to="/" className='link'>Login</Link>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div className='part2_col3 w-[35%] pl-8 flex-col pr-8'>
                            <div className='part2_col3 '>
                                <h2 className='text-[20px] font-[600] mb-4'>Subscribe To Newsletter</h2>
                                <p className='text-[13px]'>Subscribe to our latest newsletter to get news about special discouts.</p>

                                <form className='mt-5'>
                                    <input type='email' className='w-full h-[45px] border outline-none pr-4 pl-4 rounded-md mb-4 focus:border-[#000]' placeholder=' Enter Your Email Address' />
                                </form>
                                <Button className='btn-org'>SUBSCRIBE</Button>

                                <FormControlLabel control={<Checkbox />} label="I agree to the terms and conditions and the privacy policy" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div className='bottomStrip border-t border-[rgba(0,0,0,0.2)] py-3'>
                <div className='container flex items-center justify-between'>
                    <ul className='flex items-center gap-4'>
                        <li className='list-none'><Link to='/' target='_blank' className=' rounded-full border border-[rgba(0,0,0,0.3)] flex items-center justify-centre  group hover:bg-blue-600 transition-all' ><FaFacebookF className='text-[18px] group-hover:text-white gap-2' /></Link></li>
                        <li className='list-none'><Link to='/' target='_blank' className='rounded-full border border-[rgba(0,0,0,0.3)] flex items-center justify-centre group hover:bg-red-700 transition-all'  ><AiOutlineYoutube className='text-[20px] group-hover:text-white gap-2' /></Link></li>
                        <li className='list-none'><Link to='/' target='_blank' className='rounded-full border border-[rgba(0,0,0,0.3)] flex items-center justify-centre group hover:bg-red-600 transition-all'  ><FaPinterestP className='text-[18px] group-hover:text-white gap-2' /></Link></li>
                        <li className='list-none'><Link to='/' target='_blank' className=' rounded-full border border-[rgba(0,0,0,0.3)] flex items-center justify-centre group hover:bg-pink-600 transition-all'  ><FaInstagram className='text-[18px] group-hover:text-white gap-2' /></Link></li>
                    </ul>

                    <p className='text-center text-[13px] mb-0'>&copy; 2026 - Ecommerce software by NexZenShop</p>

                </div>
            </div>


            {/* ............................................................................................................................... ..*/}


            {/* Cart drawer */}

            <Drawer open={context.openCartPanel} onClose={context.toggleDrawer(false)}
                anchor={"right"} className="cartPanel">
                <div className="flex items-center justify-between py-3 px-4 gap-3 border border-[rgba(0,0,0,0.2)]">
                    <h4 className="font-bold">Shopping Cart (1)</h4>
                    <IoCloseSharp className="text-[28px] cursor-pointer" onClick={context.toggleDrawer(false)} />
                </div>

                <div className="scroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden py-3 px-4">
                    <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-3">

                        <div className="img w-[25%] overflow-hidden h-[90px] rounded-md">
                            <Link to='/productDetails/as1234'>
                                <img src="https://rukminim1.flixcart.com/image/1364/1364/xif0q/shirt/l/z/1/11-12-years-multicolur-klok-wear-original-imahhn5ag9vkh52d.jpeg?q=90" className="w-full" />
                            </Link>
                        </div>

                        <div className="information w-[75%] pr-5 relative">

                            <h4 className="text-[14px] font-[500]">
                                <Link to="/productDetails/as1234" className='link transition-all'>
                                    METRONAUT Men<br />Regular Fit Solid
                                    Spread Collar Casual Shirt
                                </Link>
                            </h4>

                            <p className="flex items-center gap-5 mt-2 mb-2">
                                <span className="font-medium">Qty : <span>2</span></span>
                                <span className="font-bold text-pink-800">Price : $50</span>
                            </p>

                            <MdOutlineDeleteOutline className="absolute top-[5px] right-[5px] cursor-pointer text-[20px] link" />
                        </div>
                    </div>
                    <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-3">

                        <div className="img w-[25%] overflow-hidden h-[90px] rounded-md">
                            <Link to='/productDetails/as1234'>
                                <img src="https://rukminim1.flixcart.com/image/1364/1364/xif0q/shirt/l/z/1/11-12-years-multicolur-klok-wear-original-imahhn5ag9vkh52d.jpeg?q=90" className="w-full" />
                            </Link>
                        </div>

                        <div className="information w-[75%] pr-5 relative">

                            <h4 className="text-[14px] font-[500]">
                                <Link to="/productDetails/as1234" className='link transition-all'>
                                    METRONAUT Men<br />Regular Fit Solid
                                    Spread Collar Casual Shirt
                                </Link>
                            </h4>

                            <p className="flex items-center gap-5 mt-2 mb-2">
                                <span className="font-medium">Qty : <span>2</span></span>
                                <span className="font-bold text-pink-800">Price : $50</span>
                            </p>

                            <MdOutlineDeleteOutline className="absolute top-[5px] right-[5px] cursor-pointer text-[20px] link" />
                        </div>
                    </div>
                    <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-3">

                        <div className="img w-[25%] overflow-hidden h-[90px] rounded-md">
                            <Link to='/productDetails/as1234'>
                                <img src="https://rukminim1.flixcart.com/image/1364/1364/xif0q/shirt/l/z/1/11-12-years-multicolur-klok-wear-original-imahhn5ag9vkh52d.jpeg?q=90" className="w-full" />
                            </Link>
                        </div>

                        <div className="information w-[75%] pr-5 relative">

                            <h4 className="text-[14px] font-[500]">
                                <Link to="/productDetails/as1234" className='link transition-all'>
                                    METRONAUT Men<br />Regular Fit Solid
                                    Spread Collar Casual Shirt
                                </Link>
                            </h4>

                            <p className="flex items-center gap-5 mt-2 mb-2">
                                <span className="font-medium">Qty : <span>2</span></span>
                                <span className="font-bold text-pink-800">Price : $50</span>
                            </p>

                            <MdOutlineDeleteOutline className="absolute top-[5px] right-[5px] cursor-pointer text-[20px] link" />
                        </div>
                    </div>
                    <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-3">

                        <div className="img w-[25%] overflow-hidden h-[90px] rounded-md">
                            <Link to='/productDetails/as1234'>
                                <img src="https://rukminim1.flixcart.com/image/1364/1364/xif0q/shirt/l/z/1/11-12-years-multicolur-klok-wear-original-imahhn5ag9vkh52d.jpeg?q=90" className="w-full" />
                            </Link>
                        </div>

                        <div className="information w-[75%] pr-5 relative">

                            <h4 className="text-[14px] font-[500]">
                                <Link to="/productDetails/as1234" className='link transition-all'>
                                    METRONAUT Men<br />Regular Fit Solid
                                    Spread Collar Casual Shirt
                                </Link>
                            </h4>

                            <p className="flex items-center gap-5 mt-2 mb-2">
                                <span className="font-medium">Qty : <span>2</span></span>
                                <span className="font-bold text-pink-800">Price : $50</span>
                            </p>

                            <MdOutlineDeleteOutline className="absolute top-[5px] right-[5px] cursor-pointer text-[20px] link" />
                        </div>
                    </div>
                    <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-3">

                        <div className="img w-[25%] overflow-hidden h-[90px] rounded-md">
                            <Link to='/productDetails/as1234'>
                                <img src="https://rukminim1.flixcart.com/image/1364/1364/xif0q/shirt/l/z/1/11-12-years-multicolur-klok-wear-original-imahhn5ag9vkh52d.jpeg?q=90" className="w-full" />
                            </Link>
                        </div>

                        <div className="information w-[75%] pr-5 relative">

                            <h4 className="text-[14px] font-[500]">
                                <Link to="/productDetails/as1234" className='link transition-all'>
                                    METRONAUT Men<br />Regular Fit Solid
                                    Spread Collar Casual Shirt
                                </Link>
                            </h4>

                            <p className="flex items-center gap-5 mt-2 mb-2">
                                <span className="font-medium">Qty : <span>2</span></span>
                                <span className="font-bold text-pink-800">Price : $50</span>
                            </p>

                            <MdOutlineDeleteOutline className="absolute top-[5px] right-[5px] cursor-pointer text-[20px] link" />
                        </div>
                    </div>
                    <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-3">

                        <div className="img w-[25%] overflow-hidden h-[90px] rounded-md">
                            <Link to='/productDetails/as1234'>
                                <img src="https://rukminim1.flixcart.com/image/1364/1364/xif0q/shirt/l/z/1/11-12-years-multicolur-klok-wear-original-imahhn5ag9vkh52d.jpeg?q=90" className="w-full" />
                            </Link>
                        </div>

                        <div className="information w-[75%] pr-5 relative">

                            <h4 className="text-[14px] font-[500]">
                                <Link to="/productDetails/as1234" className='link transition-all'>
                                    METRONAUT Men<br />Regular Fit Solid
                                    Spread Collar Casual Shirt
                                </Link>
                            </h4>

                            <p className="flex items-center gap-5 mt-2 mb-2">
                                <span className="font-medium">Qty : <span>2</span></span>
                                <span className="font-bold text-pink-800">Price : $50</span>
                            </p>

                            <MdOutlineDeleteOutline className="absolute top-[5px] right-[5px] cursor-pointer text-[20px] link" />
                        </div>
                    </div>
                </div>

                <br />

                <div className="bottomInfo w-full py-3 px-4 flex items-center justify-between border-t border-[rgba(0,0,0,0.2)] flex-col">
                    <div className="flex items-center justify-between w-full">
                        <span className="text-[14px] font-[600]">1 item</span>
                        <span className="text-pink-900 font-bold">$86.00</span>
                    </div>

                    <div className="flex items-center justify-between w-full">
                        <span className="text-[14px] font-[600]">Shipping</span>
                        <span className="text-pink-900 font-bold">$8.00</span>
                    </div>

                </div>

                <div className="bottomInfo-2 w-full py-3 px-4 flex items-center justify-between border-t border-[rgba(0,0,0,0.2)] flex-col">

                    <div className="flex items-center justify-between w-full">
                        <span className="text-[14px] font-[600]">Total (tax incl.)</span>
                        <span className="text-pink-900 font-bold">$93.00</span>
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <span className="text-[14px] font-[600]">Taxes:</span>
                        <span className="text-pink-900 font-bold">$0.00</span>
                    </div>

                </div>

                <br />

                <div className="flex items-center justify-between w-full gap-5">
                    <Link to='/cart' className=' w-[50%] d-block' ><Button className="btn-org btn-lg w-full !mb-5 !ml-3">View Cart</Button></Link>
                    <Link to='/checkout' className='w-[50%] d-block'><Button className="btn-org btn-lg w-full !mb-5 !mr-3">Checkout</Button></Link>

                </div>

            </Drawer>

        </>
    )
}

export default Footer;
