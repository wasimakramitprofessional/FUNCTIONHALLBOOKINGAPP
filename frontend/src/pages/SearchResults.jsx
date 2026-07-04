// import React from "react";
// import FilterPanel from "../components/FilterPanel";
// import HallCard from "../components/HallCard";
// import MapView from "../components/MapView";


// function SearchResults(){
//     return(
//         <div className="search-results">
//             <FilterPanel />
//             <div className="results-layout">
//                 <div className="hall-list">
//                     <HallCard name="Grand Orchid Banquets" rating={4.5} price="Rs 45,000 onwards" capacity="500" />
//                     <HallCard name="Royal Palms" rating={4.1} price="Rs 30,000 onwards" capacity="300" />
//                     <HallCard name="Sapphire Convention" rating={4.6} price="Rs 65,000 onwards" capacity="800" />

//                 </div>
//                 <MapView />


//             </div>

//         </div>
//     );
// }

// export default SearchResults;



import React from "react";
import Navbar from "../components/Navbar";
import HallCard from "../components/HallCard";

function SearchResults() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 pt-24">
        <h2 className="text-2xl font-semibold mb-6">Available Halls</h2>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <select className="border rounded p-2 focus:ring-2 focus:ring-indigo-500">
            <option>Sort by Rating</option>
            <option>Sort by Price</option>
            <option>Sort by Capacity</option>
          </select>
          <input
            type="text"
            placeholder="Search by name"
            className="border rounded p-2 flex-1 focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <HallCard name="Grand Orchid" rating={4.5} price="₹/plate" capacity="500" />
          <HallCard name="Royal Palms" rating={4.2} price="₹/plate" capacity="300" />
          <HallCard name="Sapphire Convention" rating={4.8} price="₹/plate" capacity="800" />
          <HallCard name="Emerald Banquet" rating={4.1} price="₹/plate" capacity="250" />
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
