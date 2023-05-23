import React, { useEffect, useRef, useState } from 'react';
import AllToysRow from '../../AllToysComponent/AllToysRow';
import Swal from 'sweetalert2';

const AllToys = () => {

    const [allToysData, setAllToysData] = useState([])
    console.log(allToysData)
    const searchRef = useRef(null)
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch(`https://toy-server-psi.vercel.app/mytoys?search=${search}&fetch=alltoys`)
            .then(res => res.json())
            .then(data => setAllToysData(data))
    }, [search])

    const handleSearch = () => {
        console.log(searchRef.current.value)
        setSearch(searchRef.current.value)
    }

    if (allToysData.length > 20) {
        setAllToysData((allToysData.slice(0, 20)));
    }

    return (
        <div className='lg:my-10'>

            <div className="form-control lg:mx-20 lg:mb-5">
                <div className="input-group">
                    <input ref={searchRef} type="text" placeholder="Search…" className="input input-bordered" />
                    <button onClick={handleSearch} className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>

            {/* <div className="dropdown lg:mx-20 lg:mb-3">
                <label tabIndex={0} className="btn m-1">Search By Filter</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <button onClick={showAllData} className='btn btn-outline btn-primary lg:mb-2'>Show All Toy</button>
                    <button onClick={showBarbie} className='btn btn-outline btn-primary lg:mb-2'>Show Barbie Toy</button>
                    <button onClick={showAmerica} className='btn btn-outline btn-primary lg:mb-2'>Show American Toy</button>
                    <button onClick={showAction} className='btn btn-outline btn-primary lg:mb-2'>Show Action Toy</button>
                </ul>
            </div> */}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Toy Name</th>
                            <th>Seller</th>
                            <th>Price</th>
                            <th>Sub-category</th>
                            <th>Available Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            allToysData.map(toy => <AllToysRow
                                key={toy._id}
                                toy={toy}
                            ></AllToysRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllToys;