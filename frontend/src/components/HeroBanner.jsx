import React from "react";

function HeroBanner(){
    return (
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white h-[400px] flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Taj Banajara the perfect hall</h1>
            <p className="mt-4 text-lg md:text-xl">Search by city, date and guest count</p>
            
        </div>
    );
}

export default HeroBanner;