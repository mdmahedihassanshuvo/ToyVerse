import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MytoysRow from '../../MyToysComponent/MytoysRow';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const MyToys = () => {

    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState([]);
    console.log(toys)

    const url = `https://toy-server-psi.vercel.app/mytoys?sellerEmail=${user.email}&fetch=mytoys&sort=asc`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setToys(data)
            })
    }, [url])

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-server-psi.vercel.app/mytoys/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    })
                const remaining = toys.filter(toy => toy._id !== id);
                setToys(remaining);
            }
        })
    }

    // handle ascending .......................

    const handleAscending = () => {
        fetch(`https://toy-server-psi.vercel.app/mytoys?sellerEmail=${user.email}&fetch=mytoys&sort=asc`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setToys(data)
            })
    }

    //  handle descending........................
    const handleDescending = () => {
        fetch(`https://toy-server-psi.vercel.app/mytoys?sellerEmail=${user.email}&fetch=mytoys`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setToys(data)
            })
    }

    return (
        <div className='lg:my-10 lg:mx-20'>
            <Helmet>
                <title>ToyVerse | My Toys</title>
            </Helmet>
            <div className="dropdown">
                <label tabIndex={0} className='btn btn-accent text-white lg:mb-5'>Sort by Price</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <button onClick={handleAscending} className='btn btn-outline btn-primary lg:mb-2'>Ascending By Price</button>
                    <button onClick={handleDescending} className='btn btn-outline btn-primary'>Descending By Price</button>
                </ul>
            </div>
            <div className="overflow-x-auto h-96 w-full">
                {toys.length > 0 ? <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Toy name</th>
                            <th>seller name</th>
                            <th>price</th>
                            <th>quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            toys.map((toy, index) => <MytoysRow
                                key={toy._id}
                                toy={toy}
                                index={index}
                                handleDelete={handleDelete}
                            ></MytoysRow>)
                        }
                    </tbody>

                </table> :
                    <div className='min-h-screen'>
                        <p className='text-center font-bold text-3xl text-accent lg:my-40'>Please first add Toys ...</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default MyToys;