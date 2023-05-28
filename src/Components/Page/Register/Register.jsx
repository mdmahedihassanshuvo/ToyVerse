import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const Register = () => {

    const { createUser, updateUserProfile, loginWithGoogle } = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()
    const from = location?.state?.from || '/'

    const handleForm = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photo, email, password, confirm)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                updateUserProfile(name, photo)
                    .then(() => {
                        console.log('Updated user profile')
                    })
                    .catch(error => console.log(error))
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Sign Up Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message
                })
            })
        form.reset()
    }

    const handleGoogleLogin = () => {
        loginWithGoogle()
    }

    return (
        <div className="hero min-h-screen lg:mb-5">
            <Helmet>
                <title>Sign Up</title>
            </Helmet>
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleForm} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="photo" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                        <p>Already have an account please, <Link to='/login' className='text-blue-600 underline'>Login</Link></p>
                        <div className="divider">OR</div>
                        <div className='mx-auto'>
                            <button onClick={handleGoogleLogin} className="btn btn-wide"><FaGoogle className='text-2xl mr-2' />Login With Google</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;