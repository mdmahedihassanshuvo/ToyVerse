import React, { Suspense, useEffect } from 'react';
import gallery1 from '../../../assets/images/galery-1.jpg'
import gallery2 from '../../../assets/images/galery-2.jpg'
import gallery3 from '../../../assets/images/galery-3.jpg'
import gallery4 from '../../../assets/images/galery-4.jpg'
import gallery5 from '../../../assets/images/galery-5.jpg'
import gallery6 from '../../../assets/images/galery-6.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS file

const Gallery = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='lg:mb-20' data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
            <h1 className='text-center text-xl mt-5 lg:mt-0 mb-5 lg:text-3xl text-accent font-bold lg:mb-24'>Here are some Future Toys</h1>
            <div className='mb-5 lg:mb-0'>
                <div id="animation-carousel" className="relative w-full" data-carousel="static">
                    <div className="carousel carousel-center max-w-7xl p-4 mx-auto space-x-4 bg-neutral rounded-box" data-aos="fade-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">
                        <div className="carousel-item w-80 h-64 lg:w-80 lg:h-80">
                            <img src={gallery1} className="rounded-box lg:w-full" />
                        </div>
                        <div className="carousel-item  w-80 h-64 lg:w-80 lg:h-80">
                            <img src={gallery2} className="rounded-box lg:w-full" />
                        </div>
                        <div className="carousel-item  w-80 h-64 lg:w-80 lg:h-80">
                            <img src={gallery3} className="rounded-box lg:w-full" />
                        </div>
                        <div className="carousel-item  w-80 h-64 lg:w-80 lg:h-80">
                            <img src={gallery4} className="rounded-box lg:w-full" />
                        </div>
                        <div className="carousel-item  w-80 h-64 lg:w-80 lg:h-80">
                            <img src={gallery5} className="rounded-box lg:w-full" />
                        </div>
                        <div className="carousel-item  w-80 h-64 lg:w-80 lg:h-80">
                            <img src={gallery6} className="rounded-box lg:w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;