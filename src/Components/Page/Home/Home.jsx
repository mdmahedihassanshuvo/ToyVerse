import React from 'react';
import Banner from '../../HomeComponents/Banner/Banner';
import Gallery from '../../HomeComponents/ImageSlider/Gallery';
import Category from '../../HomeComponents/Category/Category';
import Testimonial from '../../HomeComponents/Testimonial/Testimonial';
import LatestBlog from '../../HomeComponents/LatestBlog/LatestBlog';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>ToyVerse | Home</title>
            </Helmet>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <LatestBlog></LatestBlog>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;