import React from 'react';
import Banner from '../../HomeComponents/Banner/Banner';
import Gallery from '../../HomeComponents/ImageSlider/Gallery';
import Category from '../../HomeComponents/Category/Category';
import Testimonial from '../../HomeComponents/Testimonial/Testimonial';
import LatestBlog from '../../HomeComponents/LatestBlog/LatestBlog';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <LatestBlog></LatestBlog>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;