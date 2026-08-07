import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';

const HomeSlider = () => {
  return (
    <div className='homeSlider py-3 pb-0'>
      <div className='container '>
        <Swiper 
         slidesPerView={1}
        spaceBetween={30} navigation={true}
        loop = {true}
        modules={[Navigation,Autoplay]} 
        autoplay={{
          delay:2500,
          disableOnInteraction:false
        }}
    className="sliderHome  w-full h-[480px]">
      <SwiperSlide>
        <div className='item rounded-[20px] overflow-hidden'>
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/780/image/dfbad5b0664a3a15.png?q=80"alt= "Banner slide" 
        className=' w-full h-[460px]'></img>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='item rounded-[20px] overflow-hidden'>
        <img src='https://rukminim2.flixcart.com/fk-p-flap/1600/780/image/ffbfedbc1e4d8909.png?q=80'alt="banner slide"
      className='w-full h-[460px] '/>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='item rounded-[20px] overflow-hidden '>
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/780/image/713890a48392898d.png?q=80"alt="banner slide"
        className='w-full h-[460px]'/>
        </div>
        </SwiperSlide>
      <SwiperSlide>
      <div className='item rounded-[20px] overflow-hidden'>
      <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/780/image/8fcdac7fc3ba02b2.jpg?q=80"alt="banner slide"
        className=' w-full h-[460px]'/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='item rounded-[20px] overflow-hidden'>
      <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/780/image/424e2822ecacb7d1.jpg?q=80"alt="banner slide"
        className='w-full h-[460px]'/>
        </div>
      </SwiperSlide>
      
    </Swiper>
      </div>
    </div>
  )
}

export default HomeSlider

