import React, { useState } from 'react'
import HomeSlider from './HomeSlider/HomeSlider';
import  { LiaShippingFastSolid } from 'react-icons/lia'
import AdsBannerSlider from '../components/AdsBannerSlider';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProductSlider from '../components/ProductSlider';
import BlogItem from '../components/BlogItem';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';



const Home = () => {
  const [value,setValue]=useState(0)

  const handleChange = (event,newValue)=>{
    setValue(newValue)
  };

  return (
    <>
      <HomeSlider/>
      <section className='bg-white py-5'>
        <div className='container'>
          <div className='flex items-center justify-between'>
            <div className='leftSec'>
              <h3 className='text-[20px] font-[600]'>Popular Products</h3>
              <p className='text-[14] font-[400]'>do not miss the current offers until the end of this month</p>
            </div>

            <div className='rightSec w-[60%]'>
              <Tabs 
              value={value}
              onChange={handleChange}
              variant='scrollable'
              scrollButtons='auto'
              aria-label='scrollable auto tabs example'
              >
                <Tab label = 'Fashion'/>
                <Tab label = 'Bags'/>
                <Tab label = 'Electronics'/>
                <Tab label = 'Groceries'/>
                <Tab label = 'Footwear'/>
                <Tab label = 'Wellness'/>
                <Tab label = 'Jwellery'/>
                <Tab label = 'Beauty'/>
              </Tabs>
            </div>
          </div>
          <ProductSlider items={6}/>
        </div>
      </section>

      <section className='py-5 bg-white pt-2'>
        <div className = "container">
          <div className = 'freeShipping w-[80%] m-auto py-4 p-4 border-2 border-[black] flex items-center justify-between rounded-md mb-7'>
            <div className='col1 flex items-center gap-4'>
            <LiaShippingFastSolid className='text-[50px]'/>
            <span className='text-[20px] font-[600] uppercase'>Free Shipping</span>
            </div>

            <div className='col2 '>
              <p className='mb-0 font-[600]'>Free Delivery Now On Your First Order and Over $200</p>
            </div>
            <p className = 'font-bold text-[25px]'>- Only $200*</p>
          </div>
          <AdsBannerSlider items={4}/>
        </div>
      </section>

      <section className='py-5 bg-white pt-0'>
        <div className='container'>
        <h3 className='text-[20px] font-[600]'>Latest Products</h3>
        <ProductSlider items={6}/>

        <AdsBannerSlider items={3}/>
        </div>
      </section>

      <section className='py-5 bg-white pt-0'>
        <div className='container'>
        <h3 className='text-[20px] font-[600]'>Featured Products</h3>
        <ProductSlider items={6}/>

        <AdsBannerSlider items={3}/>
        </div>
      </section>

      <section className='py-5 pt-0 bg-white blogSection'>
        <div className='container'>
        <h3 className='text-[20px] font-[600] mb-4'>From The Blog</h3>
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={true}
        modules = {[Navigation]}
        className ='blogSlider'
    >
        <SwiperSlide>
            <BlogItem/>
        </SwiperSlide>
        <SwiperSlide >
            <BlogItem/>
        </SwiperSlide>
        <SwiperSlide>
            <BlogItem/>
        </SwiperSlide>
        <SwiperSlide>
            <BlogItem/>
        </SwiperSlide>
        <SwiperSlide>
            <BlogItem/>
        </SwiperSlide>

        </Swiper>
        </div>
      </section>

     

    </>
  )
}

export default Home;
