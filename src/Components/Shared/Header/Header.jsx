import React, { useContext } from 'react';
import { Link, NavLink, Navigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)
    // console.log(user)

    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log('User logged out')
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Logout Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => console.error(error))
    }

    const navItem = <>
        <li>
            <NavLink

                to='/'
                className={({ isActive }) =>
                    isActive
                        ? "text-accent"
                        : ""
                }
            >
                <span className='font-semibold text-lg hover:text-orange-700'>Home</span>
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/blog'
                className={({ isActive }) =>
                    isActive
                        ? "text-accent"
                        : ""
                }
            >
                <span className='font-semibold text-lg hover:text-orange-700'>Blogs</span>
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/allToys'
                className={({ isActive }) =>
                    isActive
                        ? "text-accent"
                        : ""
                }
            >
                <span className='font-semibold text-lg hover:text-orange-700'>All Toys</span>
            </NavLink>
        </li>
        <li>
            {user && <NavLink
                to='/myToys'
                className={({ isActive }) =>
                    isActive
                        ? "text-accent"
                        : ""
                }
            >
                <span className='font-semibold text-lg hover:text-orange-700'>My Toys</span>
            </NavLink>}
        </li>
        <li>
            {user && <NavLink
                to='/addToys'
                className={({ isActive }) =>
                    isActive
                        ? "text-accent"
                        : ""
                }
            >
                <span className='font-semibold text-lg hover:text-orange-700'>Add A Toy</span>
            </NavLink>}
        </li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-accent font-bold text-xl">ToyVerse</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? <>
                    <div className="avatar mr-4">
                        <div className="w-12 rounded-full">
                            <img title={user?.displayName} src={user?.photoURL} />
                        </div>
                    </div>
                    <button onClick={handleLogout} className='btn bg-gradient-to-r from-violet-500 to-fuchsia-500 border-0'>Logout</button>
                </> : <Link to='/login' className="btn btn-info bg-gradient-to-r from-violet-500 to-fuchsia-500 border-0 text-white">Login</Link>}
            </div>
        </div>
    );
};

export default Header;