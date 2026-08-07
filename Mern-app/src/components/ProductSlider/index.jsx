import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import ProductItem from '../ProductItem/item';

const ProductSlider = (props) => {
  return (
    <div className='productSlider py-5'>
       <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        navigation={true}
        modules = {[Navigation]}
        className ='smlBtn'
    >
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default ProductSlider;
