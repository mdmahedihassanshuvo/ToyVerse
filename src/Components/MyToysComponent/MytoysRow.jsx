import React from 'react';
import { Link } from 'react-router-dom';

const MytoysRow = ({ toy, handleDelete }) => {

    // console.log(toy)
    const { _id, toyName, subCategory, photo, sellerEmail, sellerName, ratings, quantity, price, details } = toy;

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
                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{toyName}</div>
                        <div className="text-sm opacity-50">{subCategory}</div>
                    </div>
                </div>
            </td>
            <td>
                {sellerName}
                <br />
                <span className="badge badge-ghost badge-sm">{sellerEmail}</span>
            </td>
            <td>${price}</td>
            <th>
                {/* <button className="btn btn-ghost btn-xs">{quantity}</button> */}
                <div className="font-bold">{quantity}</div>
            </th>
            <th>
                <Link to={`/updateToy/${_id}`}><button className="btn btn-primary btn-xs">Update</button></Link>
                <button onClick={() => handleDelete(_id)} className="btn btn-error ml-3 btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default MytoysRow;