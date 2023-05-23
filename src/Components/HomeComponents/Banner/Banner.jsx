import React, { useEffect } from 'react';
import banner from '../../../assets/images/banner.jpg'
import './Banner.css'
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS file


const Banner = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='banner lg:mb-20' data-aos="fade-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000">
            <div className="carousel-item relative w-full h-[600px]">
                <img src={banner} className="w-full rounded-lg" />
                <div className="absolute flex gap-5 items-center h-full left-0 top-0 text-white bg-gradient-to-r from-[#000000] to-[rgba(21, 21, 21, 0)]">
                    <div className='lg:w-1/2 w-full space-y-3 mx-4 lg:mx-20 mb-3 lg:mb-0' data-aos="fade-up"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <h2 className='text-3xl lg:text-5xl font-bold'>Welcome to <span className='text-blue-600'>TOYVERSE</span></h2>
                        <p className='text-justify'>I started making dolls in 2002, following my dream and now I am the most famous doll designer in my home city. Step by step, with reading craft books and magazines, with trial and error method and talking and seeing how old masters work I gained skills and confidence in crafting. In April 2013 the US Fashion Academy awards me with the first „Golden needle”. Since 2014, I run a doll store in San Diego.</p>
                        <div>
                            <Link to='/allToys'><button className="btn btn-outline text-xl btn-accent">Buy Now <FaShoppingCart className='ml-2' /></button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;