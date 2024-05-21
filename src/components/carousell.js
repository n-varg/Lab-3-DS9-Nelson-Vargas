// src/components/Carrousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carrousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={3}
    >
      <SwiperSlide><img src="https://www.jafibike.com.pe/wp-content/uploads/SAVA-200-calado.png" alt="Bici a la renta" /></SwiperSlide>
      <SwiperSlide><img src="https://www.jafibike.com.pe/wp-content/uploads/SAVA-200-calado.png" alt="Bici a la renta" /></SwiperSlide>
      <SwiperSlide><img src="https://www.jafibike.com.pe/wp-content/uploads/SAVA-200-calado.png" alt="Bici a la renta" /></SwiperSlide>
      <SwiperSlide><img src="https://www.jafibike.com.pe/wp-content/uploads/SAVA-200-calado.png" alt="Bici a la renta" /></SwiperSlide>
    </Swiper>
  );
};