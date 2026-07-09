import React from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate("/search");
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 grid grid-cols-1 sm:grid-cols-4 gap-4 max-w-4xl mx-auto -mt-12 relative z-10">
            <input placeholder="City / Locality" className="border p-2 rounded focus:ring-2 focus:ring-indigo-500" />
            <input type="date" className="border p-2 rounded focus:ring-2 focus:ring-indigo-500" />
            <input type="number" placeholder="Guest count" className="border p-2 rounded focus:ring-2 focus:ring-indigo-500"  />
            <button onClick={handleSearch} className="bg-indigo-600 text-white rounded px-4 py-2 hover:bg-indigo-700 transition">Search</button>
        </div>
    );
}

export default SearchBar;