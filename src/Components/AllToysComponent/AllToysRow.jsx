import React from 'react';
import { Link } from 'react-router-dom';

const AllToysRow = ({ toy }) => {

    const { _id, toyName, subCategory, photo, imageLink, sellerEmail, sellerName, quantity, price, details } = toy;



    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={imageLink || photo && photo || imageLink} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{toyName}</div>

                    </div>
                </div>
            </td>
            <td>
                {sellerName ? sellerName : 'not found'}
                <br />
                <span className="badge badge-ghost badge-sm">{sellerEmail ? sellerEmail : '...'}</span>
            </td>
            <td>${price}</td>
            <td>{subCategory}</td>
            <td>{quantity ? quantity : 'stoke out'}</td>
            <th>
                <Link to={`/allToysDetails/${_id}`} className="btn btn-primary btn-xs">Details</Link>
                {/* <button onClick={() => handleDetails(_id)} className="btn btn-primary btn-xs">details</button> */}
            </th>
        </tr>
    );
};

export default AllToysRow;