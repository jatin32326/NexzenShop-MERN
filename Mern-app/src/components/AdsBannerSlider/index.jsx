import React from 'react'


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import Bannerbox from '../bannerBox/box.jsx';


export default function AdsBannerSlider(props) {
  return (
    <div className='py-9 w-full'>
    <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        navigation={true}
        modules = {[Navigation]}
        className ='smlBtn'
    >
        <SwiperSlide>
           <Bannerbox img={"/src/assets/smartph.jpg"} link={'/'}/>
        </SwiperSlide>
        <SwiperSlide>
           <Bannerbox img={"/src/assets/banner2 (1).webp"} link={'/'}/>
       </SwiperSlide>
       <SwiperSlide>
                <Bannerbox img={"/src/assets/banner2 (1).jpg"} link={'/'}/> 
       </SwiperSlide>
       <SwiperSlide> 
                <Bannerbox img={"/src/assets/banner2 (2).webp"} link={'/'}/>
        </SwiperSlide>
        <SwiperSlide>   
                <Bannerbox img={"/src/assets/smartph.jpg"} link={'/'}/>
        </SwiperSlide>
        <SwiperSlide>
                <Bannerbox img={"/src/assets/banner2 (2).webp"} link={'/'}/>
        </SwiperSlide>

    </Swiper>
      
    </div>
  );
};

