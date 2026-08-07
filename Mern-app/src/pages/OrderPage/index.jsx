import Button from '@mui/material/Button'
import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import Badge from '../../components/Badge'

const MyOrder = () => {

    const[isOpenProduct,setIsOpenProduct] = useState(null)

    const showOrderdProduct =(index)=>{
        if(isOpenProduct===index){
            setIsOpenProduct(null)
        }else{
            setIsOpenProduct(index)
        }  
    }

    return (
        <section className='section py-10 pb-10'>
            <div className='container w-[100%] max-w-[100%] flex gap-5'>
                <div className='leftPart w-[100%] m-auto'>
                    <div className='shadow-md rounded-md bg-white'>
                        <div className='py-2 px-3 border-b border-[rgba(0,0,0,0.2)] '>
                            <h2>My Orders</h2>
                            <p className='mt-1'>
                                There are<span className='font-bold text-red-700 px-1'>2</span>
                                Orders
                            </p>
                            <div className="relative overflow-x-auto mt-5">

                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-700">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 ">
                                                &nbsp;
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                Order Id
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                Product Id
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                Name
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                Phone Number
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                Address
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                Pin code
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                total amount
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                email
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                User Id
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                Order Id
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                Order Status
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                Date
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td className='px-6 py-4 font-[500]'>
                                            <Button className='!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-[#f1f1f1]'
                                             onClick={()=>showOrderdProduct(0)}><FaAngleDown className='text-[20px] text-black font-[600]'/></Button>
                                            </td>
                                            <td className='px-6 py-4 font-[500] text-blue-500'>
                                                6789afukdk34433
                                            </td>
                                            <td className='px-6 py-4 font-[500] whitespace-nowrap  text-blue-500'>
                                                py-iwe88dxxi
                                            </td>
                                            <td className='px-6 py-4 font-[500] whitespace-nowrap'>
                                                Surya Mishra
                                            </td>
                                            <td className='px-6 py-4 font-[500]'>
                                                8989898989
                                            </td>
                                            <td className='px-6 py-4 font-[500]'>
                                                <span className='block w-[300px]'>H-01 Noida Sector 62 gali number:20 near Aggrawal sweet shop sunday market road </span>
                                            </td>
                                            <td className='px-6 py-4 font-[500]'>
                                                201008
                                            </td>
                                            <td className='px-6 py-4 font-[500]'>
                                                $100
                                            </td>
                                            <td className='px-6 py-4 font-[500]'>
                                                surya@gmail.com
                                            </td>
                                            <td className='px-6 py-4 font-[500]  text-blue-500'>
                                                4whfhjhl3ur9
                                            </td>
                                            <td className='px-6 py-4 font-[500]  text-blue-500'>
                                                uihhsakhkalf30
                                            </td>
                                            <td className='px-6 py-4 font-[500]'>
                                                <Badge status="pending" />
                                            </td>
                                            <td className='px-6 py-4 font-[500] whitespace-nowrap'>
                                                2025-09-11
                                            </td>

                                        </tr>

                                        {isOpenProduct===0 &&(<tr>
                                            <td className='pl-20' colSpan="6">
                                                <div className="relative overflow-x-auto">
                                                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-700">
                                                            <tr>
                                                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                    Product Id
                                                                </th>
                                                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                    Product title
                                                                </th>
                                                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                    Image
                                                                </th>
                                                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                    Quantity
                                                                </th>
                                                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                    Price
                                                                </th>
                                                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                    sub total
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                                                                <td className='px-6 py-4 font-[500]  text-blue-500'>
                                                                    6789afukdk34433
                                                                </td>
                                                                <td className='px-6 py-4 font-[500] whitespace-nowrap'>
                                                                    METRONAUT Men Regular Fit Solid Spread Collar Casual Shirt
                                                                </td>
                                                                <td className='px-1 py-4 font-[500] whitespace-nowrap'>
                                                                    <img src='https://rukminim1.flixcart.com/image/1364/1364/xif0q/shirt/l/z/1/11-12-years-multicolur-klok-wear-original-imahhn5ag9vkh52d.jpeg?q=90'  className='w-[50px] h-[50px] rounded-md object-cover'/>
                                                                </td>
                                                                <td className='px-6 py-4 font-[500]'>
                                                                    1
                                                                </td>
                                                                <td className='px-6 py-4 font-[500]'>
                                                                    $50.00
                                                                </td>
                                                                <td className='px-6 py-4 font-[500]'>
                                                                    $50.00
                                                                </td>


                                                            </tr>
                                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                                                                <td className='px-6 py-4 font-[500]  text-blue-500'>
                                                                    6789afukdk34433
                                                                </td>
                                                                <td className='px-6 py-4 font-[500] whitespace-nowrap'>
                                                                    METRONAUT Men Regular Fit Solid Spread Collar Casual Shirt
                                                                </td>
                                                                <td className='px-1 py-4 font-[500] whitespace-nowrap'>
                                                                    <img src='https://rukminim1.flixcart.com/image/1364/1364/xif0q/shirt/l/z/1/11-12-years-multicolur-klok-wear-original-imahhn5ag9vkh52d.jpeg?q=90'  className='w-[50px] h-[50px] rounded-md object-cover'/>
                                                                </td>
                                                                <td className='px-6 py-4 font-[500]'>
                                                                    1
                                                                </td>
                                                                <td className='px-6 py-4 font-[500]'>
                                                                    $50.00
                                                                </td>
                                                                <td className='px-6 py-4 font-[500]'>
                                                                    $50.00
                                                                </td>


                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                            </td>
                                        </tr> )}

                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyOrder
