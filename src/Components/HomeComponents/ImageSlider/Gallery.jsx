import React, { Suspense, useEffect } from 'react';
import gallery1 from '../../../assets/images/galery-1.jpg'
import gallery2 from '../../../assets/images/galery-2.jpg'
import gallery3 from '../../../assets/images/galery-3.jpg'
import gallery4 from '../../../assets/images/galery-4.jpg'
import gallery5 from '../../../assets/images/galery-5.jpg'
import gallery6 from '../../../assets/images/galery-6.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS file
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Gallery = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='lg:mb-24' data-aos="fade-left">
            <h1 className='text-center text-accent text-xs lg:text-3xl mb-4 lg:mb-12 font-semibold'>Here are some future products</h1>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <LazyLoadImage  effect="blur" className='img-fluid h[100px] lg:h-[413px] lg:w-[413px]' variant="top"  src={gallery2} />
                    {/* <img className='lg:h-[413px] lg:w-[413px]' src={gallery2} alt="" /> */}
                </SwiperSlide>
                <SwiperSlide>
                    {/* <img className='lg:h-[413px] lg:w-[413px]' src={gallery3} alt="" /> */}
                    <LazyLoadImage effect="blur" className='img-fluid h[100px] lg:h-[413px] lg:w-[413px]' variant="top"  src={gallery3} />
                </SwiperSlide>
                <SwiperSlide>
                    {/* <img className='h-[110px] lg:h-[413px] lg:w-[413px]' src={gallery4} alt="" /> */}
                    <LazyLoadImage effect="blur" className='img-fluid h[100px] lg:h-[413px] lg:w-[413px]' variant="top"  src={gallery4} />
                </SwiperSlide>
                <SwiperSlide>
                    {/* <img className='lg:h-[413px] lg:w-[413px]' src={gallery1} alt="" /> */}
                    <LazyLoadImage effect="blur" className='img-fluid h[100px] lg:h-[413px] lg:w-[413px]' variant="top"  src={gallery1} />
                </SwiperSlide>
                <SwiperSlide>
                    {/* <img className='h-[110px] lg:h-[413px] lg:w-[413px]' src={gallery5} alt="" /> */}
                    <LazyLoadImage effect="blur" className='img-fluid h[100px] lg:h-[413px] lg:w-[413px]' variant="top"  src={gallery5} />
                </SwiperSlide>
                <SwiperSlide>
                    {/* <img className=' lg:h-[413px] lg:w-[413px]' src={gallery6} alt="" /> */}
                    <LazyLoadImage effect="blur" className='img-fluid h[100px] lg:h-[413px] lg:w-[413px]' variant="top"  src={gallery6} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Gallery;