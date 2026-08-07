import React from 'react'
import Button from '@mui/material/Button'
import { BsFillBagCheckFill } from 'react-icons/bs'
import MyListItem from './MyListItem.jsx'


const MyList = () => {

    return (
        <section className='section py-5 pb-10'>
            <div className='container w-[80%] max-w-[90%] flex gap-5'>
                <div className='leftPart w-[100%] '>
                    <div className='shadow-md rounded-md bg-white'>
                        <div className='py-2 px-3 border-b border-[rgba(0,0,0,0.2)] '>
                            <h2>My List</h2>
                            <p className='mt-1'>
                                There are<span className='font-bold text-red-700 px-1'>2</span>
                                Products in My List
                            </p>
                        </div>
                        <MyListItem/>
                        <MyListItem/>
                        <MyListItem/>
                        <MyListItem/>
                        <MyListItem/>

                       
        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyList
