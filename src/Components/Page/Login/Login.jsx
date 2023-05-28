import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const Login = () => {

    const { loginUser, loginWithGoogle } = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const handleForm = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })
                form.reset()
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message
                })
            });
    }

    const handleGoogleLogin = () => {
        loginWithGoogle()
    }

    return (
        <div className="hero min-h-screen">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleForm} className="card-body">
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
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>Don't have any account please, <Link to='/register' state={{ from: from }} className='text-blue-600 underline'>Register</Link></p>
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

export default Login;