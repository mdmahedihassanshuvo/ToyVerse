import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const Details = () => {

    const toyDetails = useLoaderData()
    // console.log(toyDetails)
    const { imageLink, photo, price, rating, sellerName, quantity, details, toyName } = toyDetails

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={imageLink} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-semibold">Seller Name: {sellerName ? sellerName : 'not found'}</h1>
                        <p className="mb-2 font-medium">Toy Name: {toyName}</p>
                        <p className="mb-2">Price: ${price}</p>
                        <p className="mb-2">Quantity: {quantity}</p>
                        <p className="mb-2">Rating: <Rating
                            className='text-yellow-300'
                            placeholderRating={rating}
                            emptySymbol={<FaRegStar />}
                            placeholderSymbol={<FaStar />}
                            fullSymbol={<FaStar />}
                        /></p>
                        <p className="mb-2">Details: {details}</p>

                        <button className="btn btn-primary">Add To Card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;