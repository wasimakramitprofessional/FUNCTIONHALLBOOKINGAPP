import React from "react";
import { Link } from "react-router-dom";


function HallCard({name, rating, price, capacity}){
    return (
        <div className="border rounded-lg shadow bg-white p-4 hover:shadow-xl transition">
            <div className="h-32 bg-gray-200 flex items-center justify-center text-sm text-gray-600">Photo</div>
            <h3 className="mt-3 font-semibold text-lg">{name}</h3>
            <p className="text-sm text-gray-700">⭐ {rating} · {price} · {capacity} guests</p>
            <Link to= {`/hall/${name.replace(/\s+/g, "-").toLowerCase()}`}>
               <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">View</button>
            </Link>
        </div>
    );
}

export default HallCard;