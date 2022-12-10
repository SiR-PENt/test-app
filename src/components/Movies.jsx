import React from 'react'
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

SwiperCore.use([Autoplay]);

export default function Movies ({ movieData }) {

    return (
        <div className='mt-6'>
        <Swiper
          spaceBetween={20}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            600: {
              slidesPerView: 1.2,
              spaceBetween: 30,
            },
            800: {
              slidesPerView: 1.05,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 1.05,
              spaceBetween: 15,
            },
            1000: {
              slidesPerView: 4.3,
              spaceBetween: 10,
            },
          }}
          lazy autoplay={{ delay: 300, disableOnInteraction: false }}
          speed={5000}>
            {
                movieData.map( data => {
                    const { Poster, Title, imdbID } = data; 
                    return (
                     <SwiperSlide key={imdbID} className='w-64 h-64'>
                        <div className='rounded-lg border overflow-hidden'>
                        <img src={Poster} alt='Poster' className='w-full h-64 object-cover'/>
                        </div>
                        <p className='text-center mt-1'>{Title}</p>
                     </SwiperSlide>
                    )
                })
            }
        </Swiper>
        </div>
    )
}