// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar(){
//     return(
//         <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md fixed w-full top-0 z-50">
//             <div className="text-xl font-bold tracking-wide text-indigo-600">HALLBOOK</div>
//             <div className="space-x-6 text-sm font-medium hidden md:flex">
//                 <Link to="/search" className="hover:text-indigo-600">Browse Halls</Link>
//                 <Link to="/about" className="hover:text-indigo-600">How it works</Link>
//                 <Link to="/ownersignup" className="hover:text-indigo-600">List your hall</Link>
//                 <Link to="/login" className="hover:text-indigo-600">Login / Sign up</Link>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md fixed w-full top-0 z-50">
      {/* Logo */}
      <div className="text-xl font-bold tracking-wide text-indigo-600">HALLBOOK</div>

      {/* Desktop Links */}
      <div className="space-x-6 text-sm font-medium hidden md:flex">
        <Link to="/search" className="hover:text-indigo-600">Browse Halls</Link>
        <Link to="/about" className="hover:text-indigo-600">How it Works</Link>
        <Link to="/ownersignup" className="hover:text-indigo-600">List Your Hall</Link>
        <Link to="/login" className="hover:text-indigo-600">Login / Sign up</Link>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-gray-700 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Icon changes when open */}
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
          <Link to="/search" className="hover:text-indigo-600" onClick={() => setIsOpen(false)}>Browse Halls</Link>
          <Link to="/about" className="hover:text-indigo-600" onClick={() => setIsOpen(false)}>How it Works</Link>
          <Link to="/ownersignup" className="hover:text-indigo-600" onClick={() => setIsOpen(false)}>List Your Hall</Link>
          <Link to="/login" className="hover:text-indigo-600" onClick={() => setIsOpen(false)}>Login / Sign up</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
