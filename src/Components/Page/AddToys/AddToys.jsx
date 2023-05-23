import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const AddToys = () => {

    const { user } = useContext(AuthContext)
    // console.log(user)

    const handleForm = event => {
        event.preventDefault()
        const form = event.target;
        const toyName = form.toyName.value;
        const sellerName = form.name.value;
        const sellerEmail = form.email.value;
        const subCategory = form.subCat.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const ratings = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const toy = {
            toyName,
            sellerName,
            sellerEmail,
            subCategory,
            price: parseInt(price),
            ratings,
            quantity,
            details,
            photo
        }
        // console.log(toy);
        fetch('https://toy-server-psi.vercel.app/mytoys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(toy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Toy added successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  form.reset()
            }
        })
    }

    return (
        <div className='lg:mt-10 lg:mx-20 lg:mb-20'>
            <h3 className='text-center text-3xl font-bold text-accent mb-10'>Add Toys for sale !</h3>
            <form onSubmit={handleForm} className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Toy Name</span>
                    </label>
                    <input type="text" name='toyName' placeholder='Toy Name' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller Name</span>
                    </label>
                    <input type="text" name='name' defaultValue={user?.displayName} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller Email</span>
                    </label>
                    <input type="email" name='email' defaultValue={user?.email} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Sub-category</span>
                    </label>
                    <input type="text" name='subCat' placeholder='Sub-category' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">$Price</span>
                    </label>
                    <input type="number" name='price' placeholder='Price' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="number" name='rating' placeholder='Rating' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available quantity</span>
                    </label>
                    <input type="number" name='quantity' placeholder='Available quantity' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Detail description</span>
                    </label>
                    <input type="text" name='details' placeholder='Detail description' className="input input-bordered" />
                </div>
                <div className="form-control col-span-2">
                    <label className="label">
                        <span className="label-text">Picture URL</span>
                    </label>
                    <input type="text" name='photo' placeholder='Picture URL' className="input input-bordered" />
                </div>
                <div className="form-control col-span-2 mt-6">
                    <input className="btn btn-block" type="submit" value='Add Toys' />
                </div>
            </form>
        </div>
    );
};

export default AddToys;