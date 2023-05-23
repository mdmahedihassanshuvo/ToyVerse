import moment from 'moment/moment';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS file

const LatestBlog = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='mx-5 lg:mx-20 lg:mb-20' data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500">
            <h2 className='text-center text-3xl font-bold text-accent lg:mb-16'>Latest Blogs</h2>
            <div className="carousel carousel-center p-4 space-x-4  rounded-box">
                <div className="carousel-item">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/0YRMjCr/blog-1.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{moment().format("MMM Do, YYYY")}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/gSPTjgq/blog-2.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{moment().format("MMM Do, YYYY")}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/FWrpcL3/blog-3.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{moment().format("MMM Do, YYYY")}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/BGWHrpw/blog-4.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{moment().format("MMM Do, YYYY")}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Read</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/vJJ6n9y/blog-5.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{moment().format("MMM Do, YYYY")}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Read</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/tbZv4vh/blog-7.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{moment().format("MMM Do, YYYY")}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Read</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/NCmpDkD/blog-8.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{moment().format("MMM Do, YYYY")}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Read</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestBlog;