import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {

    const toy = useLoaderData()
    const [toys, setToys] = useState([])
    // console.log(toy);
    const { _id, toyName, subCategory, photo, sellerEmail, sellerName, ratings, quantity, price, details } = toy;

    useEffect(() => {
        fetch('https://toy-server-psi.vercel.app/mytoys')
            .then(res => res.json())
            .then(data => setToys(data));
    }, [])

    const handleForm = (id) => {
        event.preventDefault();
        console.log(id, 'clicked');
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const updateToy = {
            price,
            quantity,
            details
        };

        fetch(`https://toy-server-psi.vercel.app/mytoys/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateToy),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data, 'success');
                if (data.matchedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Toy information updated',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    const remaining = toys.filter(toy => toy._id !== id);
                    const updatedToy = toys.find(toy => toy._id === id);
                    const newToys = [updatedToy, ...remaining]
                    setToys(newToys);
                }
            });

        form.reset();
    };

    return (
        <div className='lg:my-20 lg:mx-20'>
            <form onSubmit={() => handleForm(_id)} className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">$Price</span>
                    </label>
                    <input type="number" name='price' placeholder='price' className="input input-bordered" required/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available quantity</span>
                    </label>
                    <input type="number" name='quantity' placeholder='Available quantity' className="input input-bordered" required/>
                </div>
                <div className="form-control col-span-2">
                    <label className="label">
                        <span className="label-text">Detail description</span>
                    </label>
                    <input type="text" name='details' placeholder='Detail description' className="input input-bordered" required/>
                </div>
                <div className="form-control col-span-2 mt-6">
                    <input className="btn btn-block" type="submit" value='Update' />
                </div>
            </form>
        </div>
    );
};

export default UpdateToy;