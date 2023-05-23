import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ToyCard = ({ toy }) => {

    // console.log(toy);
    const { _id, imageLink, name, price, rating } = toy;
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleDetails = (id) => {
        // console.log('clicked')
        if (user) {
            navigate(`/details/${id}`)
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You have to login first to view details'
            })
            return navigate('/login')
        }
    }

    return (
        <div className="card card-compact w-80 lg:w-96 mx-auto bg-slate-900 text-white shadow-xl">
            <figure><img src={imageLink} alt="Shoes" /></figure>
            <div className="card-body">
                <div className='space-y-2 mb-2'>
                    <h2 className="card-title">Name: {name}</h2>
                    <p className='text-lg'>Price: $<span className='text-red-600'>{price}</span></p>
                    <p className='text-lg'>Rating:
                        <Rating
                            className='text-yellow-300'
                            placeholderRating={rating}
                            emptySymbol={<FaRegStar />}
                            placeholderSymbol={<FaStar />}
                            fullSymbol={<FaStar />}
                        /></p>
                </div>
                <button onClick={() => handleDetails(_id)} className="btn btn-primary">View Details</button>
            </div>
        </div>
    );
};

export default ToyCard;