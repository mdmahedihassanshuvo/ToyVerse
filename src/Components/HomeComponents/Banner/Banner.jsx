import React, { useEffect } from 'react';
import './Banner.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS file
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/images/blog-1.jpg'
import img2 from '../../../assets/images/blog-2.jpg'
import img3 from '../../../assets/images/blog-3.jpg'
import img4 from '../../../assets/images/blog-4.jpg'
import img5 from '../../../assets/images/banner3.jpg'


const Banner = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            interval={2000}
            className='lg:mb-20 mx-5 lg:mx-0'
        >
            <div>
            <img src={img5} alt="" />
            </div>
            <div className='lg:h-[671px]'>
                <img src={img1} />
            </div>
            <div className='lg:h-[671px]'>
                <img src={img2} />
            </div>
            <div className='lg:h-[671px]'>
                <img src={img3} />
            </div>
            <div className='lg:h-[671px]'>
                <img src={img4} />
            </div>
        </Carousel>
    );
};

export default Banner;